# Nx Monorepo Bazel Starter
This repo contains the demo full-stack app made with [Nx](https://nx.dev), [Angular](https://angular.io/)
and [Nest.js](https://nestjs.com/) frameworks.
The application is built **using [Bazel](https://bazel.build/)**.

## Overview
This project was created to demonstrate a fully fledged
full-stack application built with Bazel.
It showcases basic CRUD operations, authentication, routing and more.

The full list of cool technologies used in this project:
- **Lazy loading** of each module at the **Angular** app.
- **Monorepo** architecture using **Nx** that allows TypeScript
interfaces to be shared between frontend and backend.
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
yarn

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

<!-- markdownlint-disable -->
<p align="center">
    <br/>
    <br/>
    <br/>
    <a href="https://scal.io/">
        <img src="https://raw.githubusercontent.com/scalio/bazel-nestjs-starter/master/readme-assets/scalio.png"/>
    </a>
</p>
<!-- markdownlint-restore -->
