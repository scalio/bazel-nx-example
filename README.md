![Bazel at Scalio](https://raw.githubusercontent.com/scalio/bazel/master/assets/scalio-bnx.svg?sanitize=true)

<h1 align="center">Bazel Nx-Monorepo Starter</h1>

<p align="center">
  A full-stack starter app written in Typescript using <a href="https://nx.dev">Nx</a>, <a href="https://angular.io/">Angular</a>, and <a href="https://nestjs.com/">NestJS</a> -- built <b>using <a href="https://bazel.build/">Bazel</a></b>
</p>

&nbsp;
## Overview
This project was created to demonstrate a fully fledged
full-stack typescript application built with Bazel.
It showcases basic CRUD operations, authentication, routing, code-sharing between frontend and backend and more.

Frontend application was built according to [Angular 8 JWT Authentication Example](https://github.com/cornflourblue/angular-8-jwt-authentication-example).

The full list of cool technologies used in this project:
- **Lazy loading** of each module in the **Angular** app.
- **Monorepo** architecture using **Nx** that allows TypeScript
interfaces to be shared between frontend and backend.
  - [libs/api-interface](libs/api-interface/src/interfaces):
  here you can find the shared interfaces.
- **Swagger** module for documentation.
  - After the build you can see the documentation for REST API at `http://localhost:3000/api`.
- **Passport** for login using **JWT**.
  - To access protected routes you should use the HTTP Header: `Authentication: 'Bearer <token>'`
- **TypeORM + Postgres** for persisting data.
- **Docker-compose** used to run database, frontend and the backend.
- **Bazel** build tool for faster builds

## Build & Run
The easiest way to run the API, DB and frontend all together is docker-compose:
```bash
docker-compose up --build
```

Without docker, things are a little more complicated:
```bash
# installation
yarn install -D

# run frontend
yarn start

# run backend
# assuming DB is already running
yarn start api
```

After the build the app should be available at `http://localhost:4200/`
and API docs are at `http://localhost:3000/api`.

## Credits

Created by [@rayman1104](https://github.com/rayman1104/) @ [Scalio](https://scal.io/)


## About us
<p align="center">
    <br/>
    <a href="https://scal.io/">
        <img src="https://raw.githubusercontent.com/scalio/bazel/master/assets/scalio-logo.svg?sanitize=true" />
    </a>
    <br/>
</p>
