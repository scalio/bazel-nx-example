FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
RUN npx ng build --prod

EXPOSE 4200
# CMD [ "npm", "run", "start:prod" ]
CMD npx ng serve --prod --host 0.0.0.0
