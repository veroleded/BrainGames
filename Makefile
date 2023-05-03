install:
		npm ci

test:
		npm test

lint:
		npx eslint .

publish:
		npm publish --dry-run

test-coverage:
		npm test -- --coverage --coverageProvider=v8

brain-games:
		node bin/index.js