BROWSERIFY := browserify
BROWSERIFY_OPTIONS := -t babelify

dist_file := dist/fsm.js

js_src := $(wildcard src/*.js)
all_js := fsm.js $(js_src)
test_js := $(wildcard test/*.js)

.PHONY: lint flow test

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

test: $(all_js) $(test_js)
# $(BROWSERIFY) $(BROWSERIFY_OPTIONS) test/all-tests.js > test/testbundle.js
	karma start my.conf.js --single-run
	rm -f test/testbundle.js
