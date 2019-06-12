from app import db

class Series(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), index=True, unique=True)
    js_imdb = db.Column(db.String(200), unique=True)
    js_omdb = db.Column(db.String(200), unique=True)
    created_imdb = db.Column(db.DateTime())
    created_omdb = db.Column(db.DateTime())
    imdb_id = db.Column(db.String(16))

    def __repr__(self):
        return "<Title {}>".format(self.title)

#TODO Make util.get_current_js, util.cache_js methods of Series
