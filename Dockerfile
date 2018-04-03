FROM node:8@sha256:8329de7ecb8324d8b598f0979c5458c9f3b2f6b4a7eb6046e5ac6e99573b279d
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --production
RUN npm prune
COPY dist dist

EXPOSE 80
CMD ["npm", "start"]
