FROM node:alpine
WORKDIR /app
COPY ./ /app
RUN cd /app
RUN npm i http-server -g
RUN npm run build  
RUN cd /build
EXPOSE 3000
CMD ["http-server","-a","localhost", "-p" "3000"]