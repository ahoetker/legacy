from legacy.data_processing import clean_data, parse_ratings
import json

with open("mythbusters.json", "r") as f:
    data = json.load(f)

print(len(data))
data = clean_data(data)
print(len(data))
print(list(map(parse_ratings, data)))
