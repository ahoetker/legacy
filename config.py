"""
Internal
"""
from legacy.root_logger import get_logger

"""
External
"""
import os

basedir = os.path.abspath(os.path.dirname(__file__))
logger = get_logger(__name__)


class Config(object):
    # Secret key for csrf
    SECRET_KEY = os.environ.get("SECRET_KEY") or "alsdfjklasdklfj"

    # flask-sqlalchemy configs
    if os.environ.get("MYSQL_HOST"):
        user = os.environ.get("MYSQL_USER")
        password = os.environ.get("MYSQL_PW")
        host = os.environ.get("MYSQL_HOST")
        database = os.environ.get("MYSQL_DB")
        port = os.environ.get("MYSQL_PORT")
        SQLALCHEMY_DATABASE_URI = f"mysql://{user}:{password}@{host}/{database}"
    else:
        SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(basedir, 'app.db')}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False


    # # flask-sqlalchemy configs
    # SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or \
    #     "sqlite:///" + os.path.join(basedir, "app.db")
    # SQLALCHEMY_TRACK_MODIFICATIONS = False

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
