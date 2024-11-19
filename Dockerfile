FROM mysql:8.0.40-debian

COPY ./.docker/init.sql /docker-entrypoint-initdb.d/