from legacy.data_processing import clean_data, parse_ratings, plot_show_ratings
from legacy.api import show_id_from_search, get_seasons, omdb_get_episodes
import json

with open("parks_and_rec.json", "r") as f:
    raw_data = json.load(f)


data = clean_data(raw_data)
plot_show_ratings(data)
