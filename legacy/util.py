from legacy.api import API_KEY, omdb_search, get_seasons, get_series_data
from legacy.scraping import scrape_seasons, scrape_series_data, scrape_series_search
from legacy.data_processing import create_df, clean_df, convert_datatypes
import asyncio


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
