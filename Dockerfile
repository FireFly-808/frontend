FROM node:lts-alpine3.17
LABEL maintainer="fireflyteam"

COPY ./app /app

WORKDIR /app

EXPOSE 3000


