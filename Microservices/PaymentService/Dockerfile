FROM node:lts-buster AS development

RUN apt update && \
    apt upgrade -y && \
    apt install bash

WORKDIR /usr/src/app

COPY . .

RUN npm install --location=global npm@latest typescript

FROM node:lts-buster as production

RUN apt update && \
    apt upgrade -y && \
    apt install bash

WORKDIR /usr/src/app

COPY . .

RUN npm install --location=global npm@latest typescript
