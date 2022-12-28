FROM node:16
copy ./ ./api
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y  npm \ apt-transport-https \   wget -y
RUN npm install   
expose 4000
CMD ["node", "app.js"]