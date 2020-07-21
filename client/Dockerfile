FROM node:12.13.0-alpine as build 
WORKDIR /app
COPY package*.json ./
RUN npm install

#ARG API_BASE_URL
#ARG API_BASE_PORT

#ENV REACT_APP_API_BASE_URL ${API_BASE_URL}
#ENV REACT_APP_API_BASE_PORT ${API_BASE_PORT}

COPY . .
RUN npm run build

FROM nginx 
EXPOSE 3000
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY ./nginx/nginx.conf /etc/nginx/nginx.conf