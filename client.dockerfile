FROM node:12.2-alpine
RUN apk --no-cache add --virtual builds-deps build-base python

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install

COPY tsconfig.json angular.json ormconfig.json ./
COPY ./apps ./apps
COPY ./libs ./libs

EXPOSE 4200
CMD yarn build --prod && yarn start:prod --host 0.0.0.0
