"""
Internal
"""
from app import app
from app.forms import SeriesSearchForm
from legacy.util import (
    util_get_series_data,
    process,
    search_for_show,
    add_show_to_db,
    get_current_js,
    download_raw_show_data,
    cache_js
)
from legacy.plots import inline_html
from legacy.root_logger import get_logger

"""
External
"""
from flask import render_template, redirect, url_for, flash
import asyncio

logger = get_logger(__name__)


@app.route("/", methods=["GET", "POST"])
@app.route("/index", methods=["GET", "POST"])
def index():
    # Get data from form
    form = SeriesSearchForm(validators=["DataRequired()"])

    if form.validate_on_submit():
        data = form.data.copy()

        # new method
        # Send the search query to one of the scraping/api modules
        query = data.get("query")
        if app.config.get("ALT_SEARCH") is True:
            search_type = data.get("search_type")
        else:
            search_type = "omdb"

        # Get the show ID
        try:
            show_info = search_for_show(query, search_type)
            show_id = show_info["show_id"]
            show_title = show_info["show_title"]
        except KeyError:
            flash("No valid results found for {}")
            return redirect(url_for("index"))

        # Get the Series object associated with this ID
        show_entry = add_show_to_db(show_id, show_title)

        # Check for current data given this series and search type
        current_js = get_current_js(show_entry, search_type)

        # Generate js if not cached
        # Start by getting the raw data from API/scraping
        if current_js is None:
            logger.info("No cached JS for {}, downloading...".format(show_title))
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)
            try:
                series_data = download_raw_show_data(show_id, search_type)
                if series_data.get("valid") is True:
                    raw_data = series_data["raw_data"]
                else:
                    raise KeyError("Data source did not contain required information")
            except KeyError:
                flash("No valid results found for {}".format(query), "warning")
                return redirect(url_for("index"))
            except AttributeError:
                flash("No valid results found for {}".format(query), "warning")
                return redirect(url_for("index"))

            # Process the raw data into Bokeh JS tag
            try:
                df = process(raw_data)
                script = inline_html(df, show_title)
                cache_js(show_entry, script, search_type)
            except ValueError:
                flash("No valid results found for {}".format(query), "warning")
                return redirect(url_for("index"))
        else:
            logger.info("Using cached JS for {}.".format(show_title))
            script = current_js

        # Render the resulting webpage with embedded plot
        return render_template(
            "plot.html",
            title="Plot",
            show_title=show_title,
            form=form,
            script=script,
        )

    return render_template("index.html", title="Legacy", form=form)
