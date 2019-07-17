FROM node:12.2
ENV NODE_ENV development

# Set app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock angular-metadata.tsconfig.json ./
RUN yarn install --frozen-lockfile --dev

COPY tsconfig.json angular.json WORKSPACE BUILD.bazel .bazelrc .bazelignore ./

# No src files are added to container here.
# Dockerfile.dev is to be used with volume mounting from host via docker-compose or:
# docker run -v ./apps:/app/apps:ro -v ./libs:/app/libs:ro

EXPOSE 4200
CMD yarn start
