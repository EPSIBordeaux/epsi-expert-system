# EPSI-expert-system

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![GitHub release](https://img.shields.io/github/release/oRiamn/epsi-expert-system.svg)
[![Depfu](https://badges.depfu.com/badges/7c83e37a53ade2b2907f77513892a60a/overview.svg)](https://depfu.com/github/oRiamn/epsi-expert-system)
[![CircleCI](https://circleci.com/gh/oRiamn/epsi-expert-system/tree/master.svg?style=svg)](https://circleci.com/gh/oRiamn/epsi-expert-system/tree/master)

EPSI Project - Expert System

## Setup

```bash
npm install
npm start
```

Then, go to [localhost:3000](http://localhost:3000/)

## Start it (dev)

`npm start`

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

## CircleCI

### [Install cli to debug](https://circleci.com/docs/2.0/local-cli/#installing-the-circleci-local-cli-on-macos-and-linux-distros)

### Validate configuration

`circleci config validate -c .circleci/config.yml`

### Run a local build to see if everything is OK

`circleci build`
