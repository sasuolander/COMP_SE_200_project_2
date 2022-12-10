FROM node:14

WORKDIR /testfolder

COPY . .
RUN npm install
RUN npm run test
RUN npm run coverage
