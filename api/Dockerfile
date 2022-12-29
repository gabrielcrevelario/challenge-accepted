FROM node:alpine
WORKDIR /api
COPY ./ /api
RUN cd /api
RUN npm install   
EXPOSE 4002
CMD ["npm", "start"]