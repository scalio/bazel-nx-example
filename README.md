# Lazy Loading App
This repo contains the demo full-stack app built using [Angular](https://angular.io/)
and [Nest.js](https://nestjs.com/) frameworks.
This project was generated using [Nx](https://nx.dev).

The full list of cool technologies used in this project:
- **Lazy loading** of each module at the **Angular** app.
- **Monorepo** architecture using **Nx** that allows TypeScript
interfaces to be shared between frontend and backend.
- **Swagger** module for documentation.
  - After the build you can see the documentation for REST API at `http://localhost:3333/swagger`.
- **GraphQL** module to communicate with frontend in addition to Nest.
  - After the build you can visit the GraphQL Playground at `http://localhost:3333/graphql`.
  - There you can play with protected queries and mutations.
- **Passport** for login using **JWT**.
  - To access protected routes you should use the HTTP Header:<br />
  ```Authentication: 'Bearer <token>'```
- **TypeORM + Postgres** for persisting data.
- **Docker-compose** used to run database, frontend and the backend.

## Build & Run

Run `docker-compose up --build` to build and run the project. The app should be available at `http://localhost:4200/`
