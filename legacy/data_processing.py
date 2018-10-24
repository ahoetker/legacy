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
