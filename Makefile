BROWSERIFY := browserify
BROWSERIFY_OPTIONS := -t babelify

dist_file := dist/fsm.js

js_src := $(wildcard src/*.js)
all_js := fsm.js $(js_src)

.PHONY: lint flow

all: lint dist/fsm.js flow

$(dist_file): fsm.js $(js_src)
	$(BROWSERIFY) $(BROWSERIFY_OPTIONS) fsm.js > $@

lint: eslint.marker
eslint.marker: $(all_js)
	eslint $^
	touch eslint.marker

flow: flow.marker
flow.marker: $(all_js)
	flow
	touch flow.marker
