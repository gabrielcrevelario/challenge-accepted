import express from "express";
import routers from "./routes/weatherRoute";
import "reflect-metadata";
const server = express(); 
server.use(express.json());
server.use(routers);

server.listen(process.env.HTTP_PORT || 4000,() => {
  console.log(
    `Server is running at http://localhost:4000`
  );
});