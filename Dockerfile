FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app
RUN npm cache clean --force
RUN npm install --legacy-peer-deps
RUN npm run build --prod --no-progress --output-hashing=all
FROM nginx:latest
COPY --from=build /usr/local/app/dist/pizzaria_client /usr/share/nginx/html
EXPOSE 80
