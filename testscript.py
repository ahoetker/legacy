from legacy.data_processing import clean_data, parse_ratings, plot_show_ratings
from legacy.api import show_id_from_search, get_seasons, omdb_get_episodes
import json

# with open("always_sunny.json", "r") as f:
#     raw_data = json.load(f)

show_id = show_id_from_search("Brooklyn Nine-Nine")
seasons = get_seasons(show_id)
raw_data = omdb_get_episodes(show_id, seasons)


data = clean_data(raw_data)
plot_show_ratings(data)
