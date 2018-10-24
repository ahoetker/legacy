from legacy.api import get_show_id, get_seasons, get_episode_data, get_series_omdb
from legacy.data_processing import clean_data
from legacy.plots import basic_plot
import json

# with open("parks_and_rec.json", "r") as f:
#     raw_data = json.load(f)

show_id = get_show_id("Ugly Betty")
seasons = get_seasons(show_id)
raw_data = get_series_omdb(show_id, seasons)

data = clean_data(raw_data)
basic_plot(data)
