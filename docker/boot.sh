#!/usr/bin/env bash

PORT=5000
export FLASK_APP=webapp.py
flask db init
flask db migrate
flask db upgrade

exec gunicorn --bind 0.0.0.0:$PORT wsgi
