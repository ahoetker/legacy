from app import app, db
from app.models import Series
from legacy.omdb_api import API_KEY, omdb_search, get_seasons, get_series_data
from legacy.scraping import scrape_seasons, scrape_series_data, scrape_series_search
from legacy.data_processing import create_df, clean_df, convert_datatypes
from legacy.root_logger import get_logger

import asyncio
from typing import Dict, Optional

logger = get_logger(__name__)


def process(raw_data):
    """
    This just combines the essential functions from data_processing.
    Maybe this should be handled in a script, or maybe it should be
    handled in a utilities module.
    """
    df = convert_datatypes(clean_df(create_df(raw_data)))
    return df


def util_get_series_data(show_id: str, api_key: str = API_KEY):
    seasons = get_seasons(show_id)
    loop = asyncio.get_event_loop()
    raw_data = loop.run_until_complete(get_series_data(show_id, seasons))
    test_case = raw_data[0]
    requirements = ["Title", "Season", "imdbRating"]
    for req in requirements:
        if test_case.get(req) is None:
            series_data = {"valid": False}
            return series_data
    series_data = {"raw_data": raw_data, "valid": True}
    return series_data


def util_scrape_series_data(show_id: str, api_key: str = API_KEY):
    loop = asyncio.get_event_loop()
    raw_data = loop.run_until_complete(scrape_series_data(show_id))
    test_case = raw_data[0]
    requirements = ["Title", "Season", "imdbRating"]
    for req in requirements:
        if test_case.get(req) is None:
            series_data = {"valid": False}
            return series_data
    series_data = {"raw_data": raw_data, "valid": True}
    return series_data


def search_for_show(query: str, search_type: str) -> Dict:
    """
    Get series info for some query, given a search type.
    :param search_type: What type of search to use (omdb/tvdb/alt)
    :return: Dict containing series info
    """
    if search_type == "omdb":
        info = omdb_search(query)
    elif search_type == "alt":
        info = scrape_series_search(query)

    return info


def add_show_to_db(show_id: str, show_title: str) -> Series:
    """
    Add a show to the database. If the show is already present, do nothing.
    :param show_id: IMDb ID of the show
    :param show_title: Normalized show title
    :param search_type: omdb/tvdb/imdb...
    :return: None
    """
    show_entry = Series.query.filter(Series.imdb_id == show_id).first()
    if show_entry is None:
        logger.info("Show entry added to db: {}".format(show_title))
        show_entry = Series(title=show_title, imdb_id=show_id)
        db.session.add(show_entry)
        db.session.commit()

    return show_entry


def download_raw_show_data(show_id: str, search_type: str) -> Dict:
    """
    Delegate raw data download to another util module method
    :param show_id: IMDb ID of the show
    :param search_type: omdb/tvdb/imdb...
    :return: Dict containing raw show data
    """
    series_data = None

    if search_type == "omdb":
        series_data = util_get_series_data(show_id)
    elif search_type == "alt":
        series_data = util_scrape_series_data(show_id)

    return series_data





