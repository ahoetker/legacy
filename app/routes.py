"""
Internal
"""
from app import app
from app.forms import SeriesSearchForm
from legacy.util import util_get_series_data, util_scrape_series_data, process
from legacy.plots import inline_html, outfile_html

"""
External
"""
from flask import render_template, redirect, url_for, flash
import asyncio


@app.route("/", methods=["GET", "POST"])
@app.route("/index", methods=["GET", "POST"])
def index():
    form = SeriesSearchForm(validators=["DataRequired()"])
    if form.validate_on_submit():
        data = form.data.copy()
        query = data.get("query")
        if app.config.get("ALT_SEARCH") is True:
            search_type = data.get("search_type")
        else:
            search_type = "omdb"
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            if search_type == "omdb":
                series_data = util_get_series_data(query)
            elif search_type == "alt":
                series_data = util_scrape_series_data(query)
        except KeyError as e:
            flash("No valid results found for {}.".format(query), "warning")
            return redirect(url_for("index"))
        print(series_data.get("valid"))
        if series_data.get("valid") is True:
            show_title = series_data["show_title"]
            raw_data = series_data["raw_data"]
            try:
                df = process(raw_data)
            except ValueError as e:
                flash("No valid results found for {}".format(query), "warning")
                return redirect(url_for("index"))
            script = inline_html(df, show_title)
            return render_template(
                "plot.html",
                title="Plot",
                show_title=show_title,
                form=form,
                script=script,
            )
        else:
            flash("No valid results found for {}.".format(query), "warning")
            return redirect(url_for("index"))
    return render_template("index.html", title="Legacy", form=form)


@app.route("/plot", methods=["GET", "POST"])
def plot():
    form = SeriesSearchForm(validators=["DataRequired()"])
    if form.validate_on_submit():
        data = form.data.copy()
        query = data.get("query")
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            series_data = util_get_series_data(query)
        except KeyError as e:
            flash("No valid results found for {}.".format(query), "warning")
            return redirect(url_for("plot"))
        print(series_data.get("valid"))
        if series_data.get("valid") is True:
            show_title = series_data["show_title"]
            raw_data = series_data["raw_data"]
            try:
                df = process(raw_data)
            except ValueError as e:
                flash("No valid results found for {}".format(query), "warning")
                return redirect(url_for("plot"))
            script = inline_html(df, show_title)
            return render_template("plot.html", title="Plot", form=form, script=script)
        else:
            flash("No valid results found for {}.".format(query), "warning")
            return redirect(url_for("plot"))
    return render_template("plot.html", title="Legacy", form=form)
