from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextField, BooleanField, RadioField
from wtforms.validators import DataRequired
from app import app


class SeriesSearchForm(FlaskForm):
    query = StringField("TV Series")

    if app.config.get("ALT_SEARCH") is True:
        search_type = RadioField(
            "Search Type",
            choices=[
                ("omdb", "OMDb API"),
                ("alt", "{}".format(app.config.get("ALT_SOURCE"))),
            ],
        )
    submit = SubmitField("Search")
