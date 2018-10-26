FROM nginx:alpine

MAINTAINER Ikho Bang "skyikho@acornsoft.io"

RUN rm /etc/nginx/conf.d/default.conf

ENV AUTH_SERVER localhost:3000
ENV API_SERVER localhost:8000

COPY tomcat.conf /etc/nginx/conf.d/default.conf

RUN sed -i 's/AUTH_SERVER/'$AUTH_SERVER'/g' /etc/nginx/conf.d/default.conf
RUN sed -i 's/API_SERVER/'$API_SERVER'/g' /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/
COPY docker-official.svg /usr/share/nginx/html/