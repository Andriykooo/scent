FROM node:latest

RUN mkdir -p /scent
WORKDIR /scent

COPY package.json /scent/
COPY .env /scent/

RUN npm install --omit=dev

EXPOSE 3000/tcp

CMD [ "npm", "run", "start" ]