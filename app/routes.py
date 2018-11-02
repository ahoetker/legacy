"""
Internal
"""
from app import app, db
from app.models import Series
from app.forms import SeriesSearchForm
from legacy.util import util_get_series_data, util_scrape_series_data, process
from legacy.plots import inline_html, outfile_html
from legacy.api import omdb_search
from legacy.scraping import scrape_series_search
from legacy.root_logger import get_logger

"""
External
"""
from flask import render_template, redirect, url_for, flash
from datetime import datetime, timedelta
import asyncio

logger = get_logger(__name__)

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

        if search_type == "omdb":
            show_info = omdb_search(query)
            show_title = show_info["show_title"]
            show_id = show_info["show_id"]
            s = Series.query.filter(Series.imdb_id == show_id).first()
            if s is None:
                s = Series(title=show_title, imdb_id=show_id, created_omdb=datetime(1,1,1))
                db.session.add(s)
            yesterday = datetime.utcnow() - timedelta(1)
            if s.created_omdb is None:
                s.created_omdb = datetime(1,1,1)
            if s.created_omdb > yesterday:
                script = s.js_omdb
                logger.info("Using cached JS for {}.".format(show_title))
                return render_template(
                    "plot.html",
                    title="Plot",
                    show_title=show_title,
                    form=form,
                    script=script,
                )
            elif s.created_omdb < yesterday:
                try:
                    series_data = util_get_series_data(show_id)
                    series_data["show_title"] = show_title
                except KeyError as e:
                    flash("No valid results found for {}".format(query), "warning")
                    return redirect(url_for("index"))
            if series_data.get("valid") is True:
                raw_data = series_data["raw_data"]
                try:
                    df = process(raw_data)
                except ValueError as e:
                    flash("No valid results found for {}".format(query), "warning")
                    return redirect(url_for("index"))
                script = inline_html(df, show_title)
                s.js_omdb = script
                s.created_omdb = datetime.utcnow()
                db.session.commit()
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

        elif search_type == "alt":
            show_info = scrape_series_search(query)
            show_title = show_info["show_title"]
            show_id = show_info["show_id"]
            s = Series.query.filter(Series.imdb_id == show_id).first()
            if s is None:
                s = Series(title=show_title, imdb_id=show_id, created_imdb=datetime(1,1,1))
                db.session.add(s)
            yesterday = datetime.utcnow() - timedelta(1)
            if s.created_imdb is None:
                s.created_imdb = datetime(1,1,1)
            if s.created_imdb > yesterday:
                script = s.js_imdb
                logger.info("Using cached JS for {}.".format(show_title))
                return render_template(
                    "plot.html",
                    title="Plot",
                    show_title=show_title,
                    form=form,
                    script=script,
                )
            elif s.created_imdb < yesterday:
                try:
                    series_data = util_scrape_series_data(show_id)
                    series_data["show_title"] = show_title
                except KeyError as e:
                    flash("No valid results found for {}".format(query), "warning")
                    return redirect(url_for("index"))
            if series_data.get("valid") is True:
                raw_data = series_data["raw_data"]
                try:
                    df = process(raw_data)
                except ValueError as e:
                    flash("No valid results found for {}".format(query), "warning")
                    return redirect(url_for("index"))
                script = inline_html(df, show_title)
                s.js_imdb = script
                s.created_imdb = datetime.utcnow()
                db.session.commit()
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
