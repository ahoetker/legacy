from legacy.api import (
    API_KEY,
    omdb_search,
    get_seasons,
    get_series_data,
)
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


def util_get_series_data(query: str, api_key: str = API_KEY):
    # show_info = omdb_search(query)
    # show_title = show_info["show_title"]
    # show_id = show_info["show_id"]
    # seasons = get_seasons(show_id)
    # raw_data = get_series_omdb(show_id, seasons)
    # series_data = {"show_title": show_title, "raw_data": raw_data}
    # return series_data
    show_info = omdb_search(query)
    show_title = show_info["show_title"]
    show_id = show_info["show_id"]
    seasons = get_seasons(show_id)
    loop = asyncio.get_event_loop()
    raw_data = loop.run_until_complete(get_series_data(show_id, seasons))
    test_case = raw_data[0]
    requirements = ["Title", "Season", "imdbRating"]
    for req in requirements:
        if test_case.get(req) is None:
            series_data = {"valid": False}
            return series_data
    series_data = {"show_title": show_title, "raw_data": raw_data, "valid": True}
    return series_data


async def async_get_series_data(query: str, api_key: str = API_KEY):
    show_info = omdb_search(query)
    show_title = show_info["show_title"]
    show_id = show_info["show_id"]
    seasons = get_seasons(show_id)
    loop = asyncio.get_event_loop()
    raw_data = []
    futures = [
        loop.run_in_executor(None, get_series_data, show_id, season)
        for season in seasons
    ]
    for response in await asyncio.gather(*futures):
        raw_data += response
    series_data = {"show_title": show_title, "raw_data": raw_data}
    return series_data
