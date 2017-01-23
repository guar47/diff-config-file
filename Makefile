install:
	npm install

run:
	npm run babel-node -- ./src/bin/gendiff.js $(1) $(2)

publish:
	npm publish

lint:
	npm run eslint **/*.js
