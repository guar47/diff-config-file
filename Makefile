install:
	npm install

run:
	npm run babel-node -- ./bin/diff-config-file-bin.js

publish:
	npm publish

lint:
	npm run eslint **/*.js
