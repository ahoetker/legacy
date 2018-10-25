import os
from pathlib import Path

basedir= Path(__file__)

class Config(object):
    SECRET_KEY = os.environ.get("SECRET_KEY") or "alsdfjklasdklfj"
