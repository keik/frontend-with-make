build: clean lint dist/bundle.js

watch:
	@make -j run-dev-server run-mock-api-server watch-js

dist/bundle.js: dist node_modules
	@node_modules/.bin/browserify -t [ babelify --presets es2015 ] src/scripts/main.js | \
	node_modules/.bin/uglifyjs -cm -o $@

lint: node_modules
	@node_modules/.bin/eslint src/scripts/**/*.js

watch-js: node_modules
	@node_modules/.bin/watchify -t [babelify --presets es2015 ] src/scripts/main.js -o src/bundle.js -d -v

run-mock-api-server: node_modules
	@node_modules/.bin/json-server --watch db.json

run-dev-server: node_modules
	@node_modules/.bin/http-server

dist:
	@mkdir -p $@

clean:
	@rm -rf dist

node_modules: package.json
	@npm install

.PHONY: build watch lint watch-js run-mock-api-server run-local-server clean
