from legacy.data_processing import clean_data, parse_ratings, plot_show_ratings
from legacy.api import show_id_from_search, get_seasons, omdb_get_episodes
import json

# with open("data_30_rock.json", "r") as f:
#     data = json.load(f)
SHOW_NAME = "Psych"

show_id = show_id_from_search(SHOW_NAME)
seasons = get_seasons(show_id)
raw_data = omdb_get_episodes(show_id, seasons)
data = clean_data(raw_data)
plot_show_ratings(data)
