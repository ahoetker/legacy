# legacy
[![Build Status](https://travis-ci.org/ahoetker/legacy.svg?branch=master)](https://travis-ci.org/ahoetker/legacy)

A successor to my favorite graphTV website, (hopefully) without stepping on
IMDb's toes.

## Getting Started

### Prerequisites
Go get an [OMDb API key](http://www.omdbapi.com/apikey.aspx).

Set the environment variable `OMDB_API_KEY` to this key.

### Installing
Clone this repository and `cd` to it.

Run `pip install -r requirements.txt`


## Running Tests
Tests use [pytest](https://docs.pytest.org/en/latest/). To run tests,
`pip install pytest`, then run `pytest`.


## Deployment
The Flask application looks at three environment variables:

* `OMDB_API_KEY` - Your OMDb API key.
* `ALT_SEARCH` - Whether to include the option of an alternate search. When not
set to `true`, only the OMDb search will be available.
* `ALT_SOURCE` - The URL of the alternate movie database you would like to use.  


To run directly, run `python webapp.py`, or run using whatever Flask options you
prefer.

This project has a [Docker image](https://hub.docker.com/r/ahoetker/legacy/).
A sample Docker Compose configuration is given below.

```yaml
docker-compose.yml
------------------
version: '3'
services:
  legacy:
    image: ahoetker/legacy
    container_name: legacy
    restart: always
    ports:
      - 5000:5000
    environment:
      - OMDB_API_KEY=XXXXXXXX
      - ALT_SEARCH=true
      - ALT_SOURCE=https://XXXXXX.com
```


## Versioning
Development is so early it doesn't make sense to use SVN yet. Fight me. Eventually, I
will decide a build is worthy of being `0.1.1`.

## Authors
Author | Contact | Github
--- | --- | ---
Andrew Hoetker | ahoetker@me.com | [ahoetker](https://github.com/ahoetker)

## License
None yet, no stealing please!
