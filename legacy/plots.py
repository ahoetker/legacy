from bokeh.plotting import figure, output_file, show
from bokeh.models import ColumnDataSource
from bokeh.models.tools import HoverTool
from legacy.root_logger import get_logger
from legacy.data_processing import clean_df
from pathlib import Path
import pandas as pd

logger = get_logger(__name__)
RESOURCES = Path(__file__).parent.parent / "resources"


def fancy_plot(df: pd.core.frame.DataFrame):
    """
    This plot should have all the good stuff!
    The idea is to lean on Bokeh to pull data out of
    the series JSON dict.
    """
    logger.info("Plotting series data (fancy plot)")
    source = ColumnDataSource(df)
    output_file("local_data/plot.html")
    p = figure(
        title="Ratings",
        x_axis_label="Release Date",
        x_axis_type="datetime",
        y_axis_label="IMDb Rating",
        plot_height=600,
        plot_width=700,
    )
    p.circle(x="Released", y="imdbRating", source=source, size=10, color="green")

    hover = HoverTool()
    hover.tooltips = [
        ("Title", "@Title"),
        ("Season", "@Season"),
        ("Episode", "@Episode"),
        ("Rating", "@imdbRating"),
    ]
    p.add_tools(hover)
    show(p)
