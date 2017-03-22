.DEFAULT_GOAL := build

config:
	git config -l

status:
	git branch
	git remote -v
	git status

build:
	node_modules/.bin/webpack --progress --colors

watch:
	node_modules/.bin/webpack --progress --colors --watch

dev_build:
	node_modules/.bin/webpack-dev-server -d --watch --inline --content-base www/

test:
	@echo TODO add tests
