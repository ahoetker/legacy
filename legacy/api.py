from requests import get
from bs4 import BeautifulSoup
from pathlib import Path, PosixPath
from typing import List, Dict
from legacy.root_logger import get_logger
import asyncio
import os

logger = get_logger(__name__)

# Set the OMDb API key for this module
if os.environ.get("OMDB_API_KEY") is not None:
    API_KEY = os.environ.get("OMDB_API_KEY")
elif os.environ.get("OMDB_API_KEY_FILE") is not None:
    with Path(os.environ.get("OMDB_API_KEY_FILE")).open() as f:
        API_KEY = f.read().strip()
else:
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


def omdb_search(query: str, api_key: str = API_KEY):
    """
    Returns the IMDb unique ID for a TV show, using the OMDb API.
    """
    url = "http://www.omdbapi.com/"
    payload = {"apikey": api_key, "t": query}
    response = get(url, payload)
    show_title = response.json().get("Title")
    show_id = response.json().get("imdbID")
    if show_id is None:
        logger.warning("No ID found for query {}".format(query))
    else:
        logger.info("ID {} found for query {}".format(show_id, query))
    info = {"show_title": show_title, "show_id": show_id}
    return info


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
    logger.info("Requesting data for episode {}".format(episode_id))
    return data


def get_episode_ids(show_id: str, seasons: List[str]) -> List[str]:
    """
    This function is not currently used. It is faster to use
    util.async_get_series_data, which calls get_season_data
    asynchronously. The HTTP request to scrape episode IDs
    from IMDb is the rate limiting step, so it is parallelized.
    """
    url = "https://www.imdb.com/title/{0}/episodes".format(show_id)
    episode_ids = []
    for season in seasons:
        payload = {"season": season}
        response = get(url, params=payload)
        html_soup = BeautifulSoup(response.text, "html.parser")
        episode_divs = html_soup.find_all("div", class_="list_item")
        ep_id = lambda div: div.div.a["href"].split(sep="/")[2]
        episode_ids += list(map(ep_id, episode_divs))
    return episode_ids


def get_season_data(show_id: str, season: str) -> List[Dict]:
    logger.info("Collecting data for Season {}".format(season))
    url = "https://www.imdb.com/title/{0}/episodes".format(show_id)
    payload = {"season": season}
    response = get(url, params=payload)
    html_soup = BeautifulSoup(response.text, "html.parser")
    episode_divs = html_soup.find_all("div", class_="list_item")
    ep_id = lambda div: div.div.a["href"].split(sep="/")[2]
    episode_ids = list(map(ep_id, episode_divs))
    season_data = list(map(get_episode_data, episode_ids))
    logger.info("Success : Season {}".format(season))
    return season_data


def get_series_omdb(show_id: str, seasons: List[str], api_key: str = API_KEY):
    """
    This function scrapes IMDb for the episode IDs, then grabs the info for
    each episode using the OMDb API. This is preferred, because IMDb does not
    want people scraping their site.

    NOTE: You should probably use util.async_get_series_data, which does not
    need this function. This function exists for serial requests.
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
        season_data = list(map(get_episode_data, episode_ids))
        show_data += season_data
        logger.info("Success : Season {}".format(season))
    return show_data


async def async_get_season_data(show_id: str, season: str) -> List[Dict]:
    """
    Much less worth it than the async one level up.
    Use util.async_get_series_data, it uses get_season_data, it's
    basically the same.
    """
    logger.info("Collecting data for Season {}".format(season))
    url = "https://www.imdb.com/title/{0}/episodes".format(show_id)
    payload = {"season": season}
    response = get(url, params=payload)
    html_soup = BeautifulSoup(response.text, "html.parser")
    episode_divs = html_soup.find_all("div", class_="list_item")
    ep_id = lambda div: div.div.a["href"].split(sep="/")[2]
    episode_ids = list(map(ep_id, episode_divs))
    # season_data = list(map(get_episode_data, episode_ids))
    loop = asyncio.get_event_loop()
    season_data = []
    futures = [
        loop.run_in_executor(
            None,
            get_episode_data,
            episode_id,
        )
        for episode_id in episode_ids
    ]
    for response in await asyncio.gather(*futures):
        season_data += response
    logger.info("Success : Season {}".format(season))
    return season_data