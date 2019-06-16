from app import db
from typing import Optional
from datetime import datetime, timedelta

class Series(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), index=True, unique=True)
    js_imdb = db.Column(db.String(200), unique=True)
    js_omdb = db.Column(db.String(200), unique=True)
    created_imdb = db.Column(db.DateTime())
    created_omdb = db.Column(db.DateTime())
    imdb_id = db.Column(db.String(16))

    def get_current_js(self, search_type: str) -> Optional[str]:
        """
        Return the up-to-date JavaScript tag for this show, else return None
        :return: string containing path to script tag
        """
        yesterday = datetime.utcnow() - timedelta(1)
        js_path = None

        if search_type == "omdb":
            timestamp = self.created_omdb
            if timestamp is not None and timestamp > yesterday:
                js_path = self.js_omdb
        elif search_type == "alt":
            timestamp = self.created_imdb
            if timestamp is not None and timestamp > yesterday:
                js_path = self.js_imdb

        return js_path

    def cache_js(self, script: str, search_type: str) -> None:
        """
        Add a timestamp corresponding to the appropriate search type
        :param search_type: omdb/tvdb/imdb...
        :return: None
        """
        timestamp = datetime.utcnow()
        if search_type == "omdb":
            self.js_omdb = script
            self.created_omdb = timestamp
        elif search_type == "alt":
            self.created_imdb = timestamp
            self.js_imdb = script
        db.session.commit()

    def __repr__(self):
        return "<Title {}>".format(self.title)

#TODO Make util.get_current_js, util.cache_js methods of Series
