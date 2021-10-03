FROM node:14

ENV HOME /Doggos_Final

WORKDIR /Doggos_Final

COPY . .

RUN npm install

EXPOSE $PORT

CMD [ "node", "server.js" ]

