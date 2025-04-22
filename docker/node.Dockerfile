FROM node:lts-bookworm AS base
# global install need root permission, so have to happen before we switch to
# the node user

USER node
WORKDIR /home/node/static
COPY package*.json ./
RUN npm install




FROM node:20-alpine as builder

WORKDIR /home/node/static

COPY --chown=node:node static .










