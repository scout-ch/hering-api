# Dockerfile based on https://docs.strapi.io/cms/installation/docker#production-dockerfile
###############################################################################################
# Hering API - build
###############################################################################################
FROM node:24-alpine AS build

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /build/
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm ci --omit=dev
ENV PATH=/build/node_modules/.bin:$PATH

WORKDIR /build/app
COPY . .
RUN npm run build

###############################################################################################
# Hering API - production
###############################################################################################
FROM node:24-alpine

RUN apk add --no-cache vips-dev tzdata
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app/
COPY --from=build /build/node_modules ./node_modules

WORKDIR /app/src/
COPY --from=build /build/app ./

ENV PATH=/app/node_modules/.bin:$PATH
ENV TZ=Europe/Zurich

RUN chown -R node:node /app/src/

USER node
EXPOSE 1337
CMD ["npm", "run", "start"]