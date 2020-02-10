
FROM ubuntu:16.04
FROM node:10.15.2            

RUN apt-get update \
  && apt-get install -y wget \
  && apt-get update \
  && wget -c https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
  && apt-get install -y aptitude && aptitude update && aptitude install -y libappindicator1 \
  && apt-get install -y libgconf2-4 && apt-get install -y libnss3-1d && apt-get install -y libxss1
# && dpkg -i google-chrome-stable_current_amd64.deb


WORKDIR /robot            
COPY package*.json ./   
COPY node_modules ./   
RUN npm install         
COPY . .                
COPY chromedriver ./                
CMD ["npm", "start"]    


# FROM ubuntu
# LABEL maintainer="Ronnie Velasquez ronnieitor@gmail.com"
# ENV HOME /home
# RUN apt-get update
# RUN apt-get -y install python3
# RUN apt-get -y install python3-pip
# RUN apt-get -y install tesseract-ocr
# RUN apt-get -y install libtesseract-dev
# RUN apt-get -y install language-pack-en
# RUN pip3 install pillow
# RUN pip3 install pytesseract
# RUN pip3 install Flask
# RUN pip3 install Flask-restful
# RUN pip3 install Flask_cors
# COPY ReconocimientoCaracterIA.py /home/ReconocimientoCaracter/ReconocimientoCaracterIA.py
# EXPOSE 5000
# CMD [ "python3", "/home/ReconocimientoCaracter/ReconocimientoCaracterIA.py" ]
# #RUN python3 /home/ReconocimientoCaracter/ReconocimientoCaracterIA.py
