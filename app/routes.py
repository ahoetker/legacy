from flask import (
    render_template,
    redirect,
    url_for,
    flash,
    Markup,
)
from app import app
from app.forms import SeriesSearchForm
from legacy.util import util_get_series_data, process
from legacy.plots import inline_html
import asyncio
from pathlib import Path


@app.route("/", methods=["GET", "POST"])
@app.route("/index", methods=["GET", "POST"])
def index():
    form = SeriesSearchForm(validators=["DataRequired()"])
    if form.validate_on_submit():
        data = form.data.copy()
        query = data.get("query")
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        series_data = util_get_series_data(query)
        show_title = series_data["show_title"]
        raw_data = series_data["raw_data"]
        df = process(raw_data)
        html_file = inline_html(df, show_title)
        with open(html_file, "r") as h:
            html = h.read()
        return html
    return render_template("index.html", title="Legacy", form=form, plot_html=None)

@app.route("/seriessearch", methods=["GET", "POST"])
def seriessearch():
    form = SeriesSearchForm(validators=["DataRequired()"])
    if form.validate_on_submit():
        data = form.data.copy()
        query = data.get("query")
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        series_data = util_get_series_data(query)
        show_title = series_data["show_title"]
        raw_data = series_data["raw_data"]
        df = process(raw_data)
        html_file = inline_html(df, show_title)
        with open(html_file, "r") as h:
            html = h.read()
        return html
        # return render_template("search.html", title="Search", form=form, plot_html=str(html_file))
    return render_template("search.html", title="Search", form=form, plot_html=None)
