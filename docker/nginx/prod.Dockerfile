FROM nginx:latest

COPY ./docker/nginx/default.conf /etc/nginx/conf.d

#RUN apt-get update \
#    apt-get install certbot \
#    apt-get install python-certbot-nginx
#
RUN apt-get update && \
    apt-get install certbot -y && \
    apt-get install python3-certbot-nginx -y

