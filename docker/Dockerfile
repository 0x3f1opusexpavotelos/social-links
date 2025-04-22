

FROM node:lts AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.27.4-alpine-slim
COPY --from=builder /app/static /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf


