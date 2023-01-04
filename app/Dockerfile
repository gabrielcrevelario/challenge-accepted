FROM node:alpine
WORKDIR /app
COPY ./ /app
RUN cd /app
RUN npm i serve -g
RUN npm run build  
EXPOSE 3000
CMD ["serve","-s", "build", "-p", "3000"]