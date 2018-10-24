from bokeh.plotting import figure, output_file, show
from legacy.root_logger import get_logger
from legacy.data_processing import parse_ratings
from pathlib import Path

logger = get_logger(__name__)
RESOURCES = Path(__file__).parent.parent / "resources"


def basic_plot(dataset):
    """
    This plot is just a verification that the program
    is in good working order.

    TODO: Add useful tooltips
    TODO: Add scaling options
    """
    logger.info("Plotting series data (basic plot)")
    y = list(map(parse_ratings, dataset))
    x = [i for i in range(1, len(y) + 1)]
    # desc = list(map(lambda i: dataset[i].get("Title"), x))
    output_file(RESOURCES / "plot.html")
    TOOLTIPS = [("Ranking", "$y")]
    p = figure(
        title="Episode Ratings",
        x_axis_label="Episode",
        y_axis_label="Ratings",
        tooltips=TOOLTIPS,
    )
    p.circle(x, y, legend="IMDb Rating", size=5, color="navy")
    p.line(x, y, line_width=2)
    show(p)
