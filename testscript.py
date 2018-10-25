from legacy.util import get_series_data, process
from legacy.plots import datetime_plot, seasons_plot
import json
import sys

query = str(sys.argv[1])
series_data = get_series_data(query)
show_title = series_data["show_title"]
raw_data = series_data["raw_data"]
df = process(raw_data)
seasons_plot(df, show_title)

# with open("local_data/parks_and_rec.json", "r") as f:
#     raw_data = json.load(f)
# df = process(raw_data)
# show_title = "Parks and Recreation"
# seasons_plot(df, show_title)
