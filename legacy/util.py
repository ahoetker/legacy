from legacy.api import API_KEY, get_show_id, get_seasons, get_series_omdb
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
    show_id = get_show_id(query)
    seasons = get_seasons(show_id)
    data = get_series_omdb(show_id, seasons)
    return data
