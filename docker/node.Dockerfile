FROM node:20-bookworm AS builder
# global install need root permission, so have to happen before we switch to
# the node user
RUN npm i -g pnpm@10

USER node
WORKDIR /home/node/build

RUN pnpm install --frozen-lockfile


FROM node:20-alpine
RUN npm i -g serve@13 pm2@4
RUN npm i -g serve@13 pm2@4
USER node

ENTRYPOINT [ "./pm2-start.sh" ]
CMD [ "8000" ]
