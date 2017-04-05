.DEFAULT_GOAL := build

ifeq ($(shell uname), Darwin)          # Apple
    PYTHON   := python3.5
    PIP      := pip3.5
    PYLINT   := pylint
    COVERAGE := coverage-3.5
    PYDOC    := pydoc3.5
    AUTOPEP8 := autopep8
else ifeq ($(CI), true)                # Travis CI
    PYTHON   := python3.5
    PIP      := pip3.5
    PYLINT   := pylint
    COVERAGE := coverage-3.5
    PYDOC    := pydoc3.5
    AUTOPEP8 := autopep8
else ifeq ($(shell uname -p), unknown) # Docker
    PYTHON   := python3.5
    PIP      := pip3.5
    PYLINT   := pylint
    COVERAGE := coverage-3.5
    PYDOC    := pydoc3.5
    AUTOPEP8 := autopep8
else                                   # UTCS
    PYTHON   := python3
    PIP      := pip3
    PYLINT   := pylint3
    COVERAGE := coverage-3.5
    PYDOC    := pydoc3.5
    AUTOPEP8 := autopep8
endif

.pylintrc:
	$(PYLINT) --disable=locally-disabled --reports=no --generate-rcfile > $@
	
IDB1.html: app/models.py
	pydoc3 -w app/models.py
	cp models.html IDB1.html
	rm models.html

config:
	git config -l

status:
	git branch
	git remote -v
	git status

build: standard
	node_modules/.bin/webpack --progress --colors

watch:
	node_modules/.bin/webpack --progress --colors --watch

dev_build:
	node_modules/.bin/webpack-dev-server -d --watch --inline --content-base www/

standard:
	node_modules/.bin/standard

test-client: build

test-server:
	python3 apptest/test_http.py

test: test-client test-server
