BROWSERIFY := browserify
BROWSERIFY_OPTIONS := -t babelify

dist_file := dist/fsm.js

all: dist/fsm.js

$(dist_file): fsm.js $(wildcard src/*.js)
	$(BROWSERIFY) $(BROWSERIFY_OPTIONS) fsm.js > $(dist_file)
