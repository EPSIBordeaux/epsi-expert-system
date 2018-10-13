.DEFAULT_GOAL := build

build:
	docker build -t expert_system .

up:
	docker-compose up -d

down:
	docker-compose down

restart:
	docker-compose restart

# FIXME Ne fonctionne pas actuellement. Cf Cypress avec Docker https://on.cypress.io/required-dependencies
test:
	docker exec expert_system npm test

