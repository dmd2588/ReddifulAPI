.DEFAULT_GOAL := build

config:
	git config -l

status:
	git branch
	git remote -v
	git status

build:
	webpack --progress --colors

watch:
	webpack --progress --colors --watch

test:
	@echo TODO add tests