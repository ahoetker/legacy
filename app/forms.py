from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextField, BooleanField
from wtforms.validators import DataRequired


class SeriesSearchForm(FlaskForm):
    query = StringField("TV Series")
    submit = SubmitField("Search")
