FROM node:14

WORKDIR /testfolder

COPY . .
RUN npm install
#RUN npm run test; exit 0
#RUN npm run coverage;exit 0

#Build fail if test fail.
RUN npm run test
