FROM node:10.16 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build


FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html/react
COPY --from=build-deps /usr/src/app/build/index.html /usr/share/nginx/html/
COPY --from=build-deps /usr/src/app/build/favicon.ico /usr/share/nginx/html/
COPY --from=build-deps /usr/src/app/build/photos /usr/share/nginx/html/photos/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]