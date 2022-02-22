FROM node:12
WORKDIR /usr/src/clean-node-api

# copy from root of our project and paste it in docker root
COPY ./package.json . 

# only install production packages
RUN npm install --only=prod

# copy dist from root project to root of docker
COPY ./dist ./dist

# make this accesible at 5000 port
EXPOSE 5000

CMD ["npm", "run", "start:prod"]