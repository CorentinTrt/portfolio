run_prod:
	docker compose -f docker/prod.compose.yml up --build --force-recreate -d

compose_down:
	docker compose -f docker/prod.compose.yml down