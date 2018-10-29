from requests import get
from bs4 import BeautifulSoup
from typing import List, Dict
from legacy.root_logger import get_logger
import asyncio

logger = get_logger(__name__)
SITE_URL = "imdb.com"

def scrape_season_data(show_id: str, season: str) -> List[Dict]:
    url = "https://{0}/title/{1}/episodes".format(SITE_URL, show_id)
    payload = {"season": season}
    response = get(url, params=payload)
    html_soup = BeautifulSoup(response.text, "html.parser")
    list_div = html_soup.find("div", class_="list detail eplist")
    episode_divs = list_div.find_all("div", class_="info")
    season_data = []
    for episode in episode_divs:
        ep_title = episode.a.get("title")
        ep_number = episode.find("meta").get("content")
        rating = episode.find("span", class_="ipl-rating-star__rating").get_text()
        imdbID = episode.find("div", class_="wtw-option-standalone").get("data-tconst")
        airdate = episode.find("div", class_="airdate").text.strip()
        # not currently needed
        # ep_url = "https://{0}{1}".format(SITE_URL, episode.a.get("href"))
        season_data.append({"Title": ep_title, "Season": season, "Episode": ep_number, "imdbRating": rating,"imdbID": imdbID, "Released": airdate})
    return season_data


def scrape_seasons(show_id: str) -> List[str]:
    url = "https://{0}/title/{1}/episodes".format(SITE_URL, show_id)
    response = get(url, params={"season": "1"})
    html_soup = BeautifulSoup(response.text, "html.parser")
    season_options = html_soup.find("select", id="bySeason")
    seasons = [s.get("value") for s in season_options.find_all("option") if int(s.get("value")) in range(1, 50)]
    return seasons


async def scrape_series_data(show_id: str) -> List[Dict]:
    seasons = scrape_seasons(show_id)
    series_data = []
    loop = asyncio.get_event_loop()
    futures = [
        loop.run_in_executor(None, scrape_season_data, show_id, season)
        for season in seasons
    ]
    for season_result in await asyncio.gather(*futures):
        series_data.append(season_result)
    flatten = lambda l: [item for sublist in l for item in sublist]
    return flatten(series_data)
