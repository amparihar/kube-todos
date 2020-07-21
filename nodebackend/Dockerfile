FROM node:12.13.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4000

#ENTRYPOINT [ "npm", "run" ]
#CMD ["start-server"]

CMD ["npm", "run", "start-server"]