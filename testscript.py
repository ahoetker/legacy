from legacy.util import util_get_series_data, process, util_scrape_series_data
from legacy.plots import datetime_plot, seasons_plot
from legacy.omdb_api import omdb_search
from legacy.scraping import scrape_seasons, scrape_season_data
import json
import sys
import asyncio

# query = str(sys.argv[1])
# series_data = util_get_series_data(query)
# show_title = series_data["show_title"]
# raw_data = series_data["raw_data"]
# df = process(raw_data)
# seasons_plot(df, show_title)

"""
Useful for playing with plots
"""
# with open("local_data/parks_and_rec.json", "r") as f:
#     raw_data = json.load(f)
# df = process(raw_data)
# show_title = "Parks and Recreation"
# seasons_plot(df, show_title)

query = str(sys.argv[1])
series_data = util_scrape_series_data(query)
print(series_data)
print(len(series_data))
