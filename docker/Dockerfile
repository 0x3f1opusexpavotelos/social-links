FROM nginx:alpine

COPY . /usr/share/nginx/html/

RUN echo 'server { \
  listen 80; \
  server_name  \
  root /usr/share/nginx/html;  \
  index index.html index.htm; \
  \
  access_log /var/log/nginx/access.log; \
  error_log /var/log/nginx/error.log; \
  # enable gzip compression \
  gzip on; \
  gzip_vary on; \
  gzip_types text/plain text/css application/json application/javascript; \
  \
  # cache settings \
  location ~* \\.(?:css|js|jpg|jpeg|gif|png|ico|svg)$ { \
  expires 7d; \
  add_header Cache-Control "public"l \
  } \
  }' > /etc/nginx/conf.d/default.conf


EXPOSE 80

ENTRYPOINT [ "nginx " ]

CMD ["nginx", "-g", "dameon off;"]



# ENTRYPOINT [ "./pm2-start.sh" ]
# CMD [ "8000" ]
