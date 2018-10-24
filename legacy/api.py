from requests import get
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup
from pathlib import Path, PosixPath
from typing import List, Dict
from legacy.root_logger import get_logger

logger = get_logger(__name__)

# Set the OMDb API key for this module
RESOURCES = Path(__file__).parent.parent / "resources"
KEYFILE = RESOURCES / "APIKEY"
with KEYFILE.open() as f:
    API_KEY = f.read().strip()


def get_api_key(path: PosixPath) -> str:
    """
    Get OMDb API key from plaintext file.
    """
    api_key = ""
    with path.open() as f:
        api_key = f.read()
    return api_key.strip()


def get_show_id(query: str, api_key: str = API_KEY) -> str:
    """
    Returns the IMDb unique ID for a TV show, using the OMDb API.
    """
    url = "http://www.omdbapi.com/"
    payload = {"apikey": api_key, "t": query}
    show_id = get(url, payload).json().get("imdbID")
    if show_id is None:
        logger.warning("No ID found for query {}".format(query))
    else:
        logger.info("ID {} found for query {}".format(show_id, query))
    return show_id


def get_seasons(show_id: str, api_key: str = API_KEY) -> List[str]:
    """
    Get a list of all the seasons for a TV show. This is necessary
    in order to scrape episode IDs from IMDb.
    """
    logger.info("Looking for season information.")
    payload = {"season": 1}
    url = "https://www.imdb.com/title/{0}/episodes".format(show_id)
    response = get(url, params=payload)
    html_soup = BeautifulSoup(response.text, "html.parser")
    season_picker = html_soup.find("select", class_="current")
    season_options = season_picker.find_all("option")
    options = list(map(lambda x: x.text.strip(), season_options))
    seasons = list(filter(lambda x: x in [str(i) for i in range(1, 50)], options))
    return seasons


def get_episode_data(episode_id: str, api_key: str = API_KEY):
    """
    Get JSON data for a TV episode from OMDb, using the episode's
    unique IMDb ID.
    """
    url = "http://www.omdbapi.com/"
    payload = {"apikey": api_key, "i": episode_id}
    response = get(url, params=payload)
    data = response.json()
    return data


def get_series_omdb(show_id: str, seasons: List[str], api_key: str = API_KEY):
    """
    This function scrapes IMDb for the episode IDs, then grabs the info for
    each episode using the OMDb API. This is preferred, because IMDb does not
    want people scraping their site.
    """
    url = "https://www.imdb.com/title/{0}/episodes".format(show_id)
    show_data = []
    logger.info("Collecting episode data (this make take a while).")
    for season in seasons:
        logger.info("Collecting data for Season {}".format(season))
        payload = {"season": season}
        response = get(url, params=payload)
        html_soup = BeautifulSoup(response.text, "html.parser")
        episode_divs = html_soup.find_all("div", class_="list_item")
        ep_id = lambda div: div.div.a["href"].split(sep="/")[2]
        episode_ids = list(map(ep_id, episode_divs))
        episode_data = list(map(get_episode_data, episode_ids))
        show_data += episode_data
        logger.info("Success : Season {}".format(season))
    return show_data
