FROM nginx:alpine

MAINTAINER Ikho Bang "skyikho@acornsoft.io"

RUN rm /etc/nginx/conf.d/default.conf
COPY tomcat.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/