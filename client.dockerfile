FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
# RUN npx ng build

EXPOSE 4200
# CMD [ "npm", "run", "start:prod" ]
CMD npx ng serve --host 0.0.0.0
