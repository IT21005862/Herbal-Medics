FROM node:14.15.0-alpine



# set working directory
WORKDIR /app



# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH 

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
#react-scripts@3.4.1 -g --silent


# add app
COPY . ./
EXPOSE 8084
# start app
CMD ["npm","run","start"]
