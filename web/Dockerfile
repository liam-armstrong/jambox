# Stage 1 - the build process
FROM node:11 as build-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.15-alpine
COPY --from=build-deps /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
