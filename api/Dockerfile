FROM node:alpine
WORKDIR /api
COPY ./ /api
RUN cd /api
RUN npm install   
EXPOSE 8082
CMD ["npm", "start"]