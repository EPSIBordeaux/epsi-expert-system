# EPSI-expert-system

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![GitHub release](https://img.shields.io/github/release/EPSIBordeaux/epsi-expert-system.svg)
[![CircleCI](https://circleci.com/gh/EPSIBordeaux/epsi-expert-system.svg?style=svg)](https://circleci.com/gh/EPSIBordeaux/epsi-expert-system)

EPSI Project - Expert System

## Start it (dev)

```bash
npm install
npm run dev
```

Then, go to [localhost:3000](http://localhost:3000/)

## Start it (dev with Docker)

```bash
make
make up
```

Then, go to [localhost:3000](http://localhost:3000/)

## Test it

With Cypress console opened :

`npm run cypress`

With a node server already running :

`npm test`

Without a node server already running :

`npm run run-test`

## Lint it

This project use [StandardJS](https://standardjs.com) as linter with a pre-commit hook.

To configure text editor, see [this link](https://standardjs.com/#are-there-text-editor-plugins).

To run linter : `npm run lint`

To run linter with auto-fix : `npm run lint-fix`

## Deploy it

TODO, see what's done with [this repository, it's will be quite the same](https://github.com/sylvainmetayer/docker-betisier-tp)

## CircleCI

### [Install cli to debug](https://circleci.com/docs/2.0/local-cli/#installing-the-circleci-local-cli-on-macos-and-linux-distros)

### Validate configuration

`circleci config validate -c .circleci/config.yml`

### Run a local build to see if everything is OK

`circleci build`
