FROM debian:jessie
ENV CHROME_VERSION "google-chrome-stable"
RUN sed -i -- 's&deb http://deb.debian.org/debian jessie-updates main&#deb http://deb.debian.org/debian jessie-updates main&g' /etc/apt/sources.list \
  && apt-get update && apt-get install wget -y
ENV CHROME_VERSION "google-chrome-stable"
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list \
  && apt-get update && apt-get -qqy install ${CHROME_VERSION:-google-chrome-stable}
CMD /bin/bash

# FROM ubuntu:17.04
# FROM selenium/standalone-chrome
# FROM python:3.6
# RUN apt update
# RUN apt-get install -y libnss3 libgconf-2-4
# ADD ./requirements.txt /tmp/requirements.txt
# RUN python -m pip install -r /tmp/requirements.txt
# ADD . /opt/example1/
# # rights?
# RUN chmod +x /opt/example1/assets/chromedriver


FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install -y

COPY . .

CMD [ "npm", "start" ]