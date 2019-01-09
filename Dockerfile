FROM node:10-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

#RUN npm install
COPY yarn.lock /usr/src/app

RUN yarn install --ignore-scripts

COPY . /usr/src/app

EXPOSE 5700

CMD ["npm", "run", "start"]
