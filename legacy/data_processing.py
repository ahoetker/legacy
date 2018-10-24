from bokeh.plotting import figure, output_file, show
from legacy.root_logger import get_logger
from pathlib import Path

logger = get_logger(__name__)
RESOURCES = Path(__file__).parent.parent / "resources"


def clean_data(dataset):
    data = list(filter(lambda e: e.get("Error") is None, dataset))
    data = list(filter(lambda e: e.get("imdbRating") != "N/A", data))
    return data


def parse_ratings(episode):
    try:
        ratings = float(episode.get("imdbRating"))
        return ratings
    except TypeError as e:
        logger.warning("No Ratings for episode: {}".format(episode["Title"]))
        return None


def plot_show_ratings(dataset):
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
