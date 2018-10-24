from legacy.util import get_series_data, process
from legacy.plots import datetime_plot, seasons_plot
import json

# series_data = get_series_data("doctor who")
# show_title = series_data["show_title"]
# raw_data = series_data["raw_data"]
with open("local_data/parks_and_rec.json", "r") as f:
    raw_data = json.load(f)
show_title = "Parks and Recreation"
df = process(raw_data)
seasons_plot(df, show_title)
