"""
Internal
"""
from legacy.root_logger import get_logger

"""
External
"""
from pathlib import Path
import os

basedir = Path(__file__)
logger = get_logger(__name__)


class Config(object):
    # Secret key for csrf
    SECRET_KEY = os.environ.get("SECRET_KEY") or "alsdfjklasdklfj"

    # Provide OMDb API key
    OMDB_API_KEY = os.environ.get("OMDB_API_KEY") or None

    # Permit use of alternate search source
    if os.environ.get("ALT_SEARCH") == "true":
        ALT_SEARCH = True
    else:
        ALT_SEARCH = False

    # Provide website for alternate source
    ALT_SOURCE = os.environ.get("ALT_SOURCE")
    if ALT_SEARCH is True and ALT_SOURCE is None:
        logger.warning("ALT_SEARCH is True but no ALT_SOURCE specified.")
        assert ALT_SOURCE is not None
