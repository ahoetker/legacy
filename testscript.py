from legacy.util import get_series_data, process
from legacy.plots import fancy_plot
import json

raw_data = get_series_data("Brooklyn Nine-Nine")
df = process(raw_data)
fancy_plot(df)
