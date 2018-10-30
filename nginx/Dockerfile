FROM nginx:alpine

MAINTAINER Ikho Bang "skyikho@acornsoft.io"

RUN rm /etc/nginx/conf.d/default.conf

ENV AUTH_SERVER auth-server:3000
ENV API_SERVER api-server:8080

COPY nginx.conf1 /etc/nginx/conf.d/default.conf

RUN sed -i 's/AUTH_SERVER/'$AUTH_SERVER'/g' /etc/nginx/conf.d/default.conf
RUN sed -i 's/API_SERVER/'$API_SERVER'/g' /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/
COPY docker-official.svg /usr/share/nginx/html/
