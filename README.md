# Nx Bazel Starter
This repo contains the demo full-stack app made with [Nx](https://nx.dev), [Angular](https://angular.io/)
and [Nest.js](https://nestjs.com/) frameworks.
The application is built using [Bazel](https://bazel.build/).

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

## Build & Run

Run `docker-compose up --build` to build and run the project. The app should be available at `http://localhost:4200/`

Run `yarn start` to run only frontend.

Run `yarn start api` to run only backend (assuming DB is already started).
