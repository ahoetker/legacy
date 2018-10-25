# legacy
[![Build Status](https://travis-ci.org/ahoetker/legacy.svg?branch=master)](https://travis-ci.org/ahoetker/legacy)

A successor to my favorite graphTV website, (hopefully) without stepping on
IMDb's toes.

## Getting Started

### Prerequisites
Go get an [OMDb API key](http://www.omdbapi.com/apikey.aspx).

At this point, there are two ways to include the API key.

1. Set the environment variable `OMDB_API_KEY` equal to the key.
2. Save the key in a plaintext file somewhere, and export the path to that
file as  `OMDB_API_KEY_FILE`.

### Installing
Clone this repository and `cd` to it.

Run `pip install -r requirements.txt`

No binaries or entry points currently exist. To test the functionality, run
`python testscript.py $query` with the name of a TV show.
## Running Tests
Tests use [pytest](https://docs.pytest.org/en/latest/). To run tests,
`pip install pytest`, then run `pytest`.



## Deployment
A Dockerfile and Docker image are planned "soon".

## Versioning
Once Deployment is at hand, I will start using SVN for the project.

## Authors
Author | Contact | Github
--- | --- | ---
Andrew Hoetker | ahoetker@me.com | [ahoetker](https://github.com/ahoetker)

## License
None yet, no stealing please!
