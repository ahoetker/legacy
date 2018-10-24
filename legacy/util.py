from legacy.api import API_KEY, omdb_search, get_seasons, get_series_omdb
from legacy.data_processing import create_df, clean_df, convert_datatypes


def process(raw_data):
    """
    This just combines the essential functions from data_processing.
    Maybe this should be handled in a script, or maybe it should be
    handled in a utilities module.
    """
    df = convert_datatypes(clean_df(create_df(raw_data)))
    return df


def get_series_data(query: str, api_key: str = API_KEY):
    show_info = omdb_search(query)
    show_title = show_info["show_title"]
    show_id = show_info["show_id"]
    seasons = get_seasons(show_id)
    raw_data = get_series_omdb(show_id, seasons)
    series_data = {"show_title": show_title, "raw_data": raw_data}
    return series_data
