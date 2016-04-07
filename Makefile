BROWSERIFY := browserify
BROWSERIFY_OPTIONS := -t babelify

dist_file := dist/fsm.js

js_src := $(wildcard src/*.js)
test_js := $(wildcard test/*.js)
all_js := fsm.js $(js_src) $(test_js)

.PHONY: lint test

all: lint $(dist_file)

$(dist_file): fsm.js $(js_src)
	webpack fsm.js $@

lint: eslint.marker
eslint.marker: $(all_js)
	eslint $^
	touch eslint.marker

test: $(all_js) $(test_js)
	xvfb-run karma start my.conf.js --single-run
