import pytest
from legacy.api import omdb_search, get_seasons


def test_omdb_search():
    query = "psych"
    response = omdb_search(query)
    assert response["show_title"] == "Psych"
    assert response["show_id"] == "tt0491738"


def test_get_seasons():
    show_id = "tt0491738"
    seasons = get_seasons(show_id)
    assert seasons == ["1", "2", "3", "4", "5", "6", "7", "8"]
