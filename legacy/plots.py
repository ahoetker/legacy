from bokeh.plotting import figure, output_file, show
from bokeh.models import ColumnDataSource
from bokeh.models.tools import HoverTool
from bokeh.palettes import Dark2_5 as palette
from legacy.root_logger import get_logger
from legacy.data_processing import clean_df
from pathlib import Path
import pandas as pd
import itertools

logger = get_logger(__name__)
RESOURCES = Path(__file__).parent.parent / "resources"


def datetime_plot(df: pd.core.frame.DataFrame, show_title: str):
    """
    This plot should have all the good stuff!
    The idea is to lean on Bokeh to pull data out of
    the series JSON dict.
    """
    logger.info("Plotting series data (fancy plot)")
    source = ColumnDataSource(df)
    output_file("local_data/plot.html")
    p = figure(
        title="IMDb Ratings for {}".format(show_title),
        x_axis_label="Release Date",
        x_axis_type="datetime",
        y_axis_label="IMDb Rating",
        plot_height=600,
        plot_width=1200,
    )
    p.circle(
        x="Released", y="imdbRating", source=source, size=5, color="green", alpha=0.5
    )

    hover = HoverTool()
    hover.tooltips = [
        ("Title", "@Title"),
        ("Season", "@Season"),
        ("Episode", "@Episode"),
        ("Rating", "@imdbRating"),
    ]
    p.add_tools(hover)
    show(p)


def seasons_plot(df: pd.core.frame.DataFrame, show_title: str):
    """
    This plot should have all the good stuff!
    """
    logger.info("Plotting series data (fancy plot)")
    output_file("local_data/plot.html")

    # Each season gets its own color
    colors = itertools.cycle(palette)
    colormap = {season: color for season, color in zip(df.Season.unique(), colors)}
    df["colors"] = [colormap[x] for x in df.Season]

    # Source df to Bokeh
    source = ColumnDataSource(df)

    p = figure(
        title="IMDb Ratings for {}".format(show_title),
        x_axis_label="Episode Number",
        y_axis_label="IMDb Rating",
        plot_height=600,
        plot_width=1200,
    )

    p.circle(
        x="Sequential",
        y="imdbRating",
        source=source,
        size=10,
        color="colors",
        alpha=0.75,
    )
    p.line(
        x="Sequential",
        y="imdbRating",
        source=source,
        color="black",
        alpha=0.75,
        line_width=1,
    )

    hover = HoverTool()
    hover.tooltips = [
        ("Title", "@Title"),
        ("Season", "@Season"),
        ("Episode", "@Episode"),
        ("Rating", "@imdbRating"),
    ]
    p.add_tools(hover)
    show(p)
