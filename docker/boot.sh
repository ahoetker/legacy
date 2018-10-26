#!/usr/bin/env bash

PORT=5000

exec gunicorn --bind 0.0.0.0:$PORT wsgi -w 1 --threads 12