import os
from pathlib import Path
from legacy.root_logger import get_logger

basedir= Path(__file__)
logger = get_logger(__name__)

class Config(object):
    # Secret key for csrf
    SECRET_KEY = os.environ.get("SECRET_KEY") or "alsdfjklasdklfj"
    # Permit use of alternate search source
    # if os.environ.get("ALT_SEARCH") == "true":
    #     ALT_SEARCH = True
    # else:
    #     ALT_SEARCH = False
    ALT_SEARCH = True

    ALT_SOURCE = os.environ.get("ALT_SOURCE")
    if ALT_SEARCH is True and ALT_SOURCE is None:
        logger.warning("ALT_SEARCH is True but no ALT_SOURCE specified.")

    ALT_SOURCE = "imdb.com"
