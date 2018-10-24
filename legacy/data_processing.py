from bokeh.plotting import figure, output_file, show
from legacy.root_logger import get_logger
from pathlib import Path

logger = get_logger(__name__)
RESOURCES = Path(__file__).parent.parent / "resources"


def clean_data(dataset):
    """
    Primarily, remove entries that have an Error value.
    Also, remove entries lacking an IMDb Rating. For now,
    this seems like a good strategy. I will revisit this if
    there are weird gaps in the plot.
    """
    logger.info("Cleaning series data.")
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
