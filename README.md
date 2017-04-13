# ReddifulAPI [![Build Status](https://travis-ci.org/dmd2588/idb.svg?branch=master)](https://travis-ci.org/dmd2588/idb)

[Website](http://reddifulapi.me/)

[Apiary](http://docs.reddiful.apiary.io/)

## Setup

Install nodejs and python3 with their respective package managers npm and pip3

`make install` will install the client and server dependencies

Set the `DB_URL` environment variable to the postgresql database the API should connect to

## Building

To bundle the client jsx files, run:
`make build`

## Running

`FLASK_PORT=8080 make start` will start the api/server on the specified port.
The client is served from the same port. When the client or server files change the server is automatically reloaded.

## Testing

`make test` will run the client and server tests
`make test-client` will just run the client tests
`make test-server` will just run the server tests

The server tests require that the API is running and uses the same `FLASK_PORT` environment variable to determine which port to connect to or if it is not set it defaults to port 80.

## Docker

Docker can be used instead of setting up the API manually by running `docker-compose up`.
The API is running on port 80 now.
