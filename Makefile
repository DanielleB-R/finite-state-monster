BROWSERIFY := browserify
BROWSERIFY_OPTIONS := -t babelify

dist_file := dist/fsm.js

js_src := $(wildcard src/*.js)

.PHONY: lint

all: lint dist/fsm.js

$(dist_file): fsm.js $(js_src)
	$(BROWSERIFY) $(BROWSERIFY_OPTIONS) fsm.js > $(dist_file)

lint: fsm.js $(js_src)
	eslint $^
