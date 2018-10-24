from bokeh.plotting import figure, output_file, show
from pathlib import Path

RESOURCES = Path(__file__).parent.parent / "resources"

def clean_data(dataset):
    data = list(filter(lambda e: e.get("Title") is not None, dataset))
    data = list(filter(lambda e: e.get("Ratings") is not None, dataset))
    return data


def parse_ratings(episode):
    try:
        ratings = float(episode.get("Ratings")[0].get("Value").split("/")[0])
        return ratings
    except IndexError as e:
        print("No Ratings for episode: {}".format(episode["Title"]))
        return None
    except TypeError as e:
        print("No Ratings for episode: {}".format(episode["Title"]))
        return None
    except KeyError as e:
        print("An untitled episode was skipped.")
        return None


def plot_show_ratings(dataset):
    y = list(map(parse_ratings, dataset))
    x = [i for i in range(1, len(y))]
    output_file(RESOURCES / "plot.html")
    p = figure(title="Episode Ratings", x_axis_label="Episode", y_axis_label="Ratings")
    p.line(x, y, legend="IMDb Rating", line_width=2)
    show(p)
