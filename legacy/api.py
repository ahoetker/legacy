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
    url = "http://omdbapi.com/"
    payload = {"apikey": API_KEY, "i": show_id, "season": 1}
    response = get(url, params=payload)
    num_seasons = int(response.json().get("totalSeasons"))
    seasons = [str(i) for i in range(1, num_seasons + 1)]
    return seasons


def get_episode_ids(show_id: str, seasons: List[str]) -> List[str]:
    url = "http://www.omdbapi.com/"
    episode_ids = []
    for season in seasons:
        payload = {"apikey": API_KEY, "i": show_id, "season": season}
        response = get(url, params=payload)
        data = response.json()
        for episode in data.get("Episodes"):
            episode_ids.append(episode.get("imdbID"))
    return episode_ids


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


async def get_series_data(show_id: str, seasons: List[str]) -> List[Dict]:
    """
    Call get_episode_data asynchronously
    return list of data Dicts for each episode
    """
    episode_ids = get_episode_ids(show_id, seasons)
    season_data = []
    loop = asyncio.get_event_loop()
    futures = [
        loop.run_in_executor(None, get_episode_data, episode_id)
        for episode_id in episode_ids
    ]
    for response in await asyncio.gather(*futures):
        season_data.append(response)
    return season_data
