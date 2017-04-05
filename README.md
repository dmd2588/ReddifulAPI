# ReddifulAPI [![Build Status](https://travis-ci.org/dmd2588/idb.svg?branch=master)](https://travis-ci.org/dmd2588/idb)

[Website](http://reddifulapi.me/)

[Apiary](http://docs.reddiful.apiary.io/)

## Setup

Install docker and nodejs

To install the client side dependencies run:
`npm install`

Set the `DB_URL` environment variable to the database the API should connect to

## Building

To bundle the client jsx files, run:
`make build`

## Testing

`make test` will run the client and server tests
`make test-client` will just run the client tests
`make test-server` will just run the server tests

The server tests require that the API is running

## Running

To start the API run:
`docker-compose up`

The api is running locally on port `80`
