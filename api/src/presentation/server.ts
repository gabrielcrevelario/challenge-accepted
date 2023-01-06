import  express from "express";
import routers from "./routes/weatherRoute";
import { config } from "dotenv";
import populate from "../utils/populateDb";

config()
import mongoose, { Mongoose } from "mongoose";
const server = express(); 
server.use(express.json());
server.use(routers);
server.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});
server.listen(process.env.HTTP_PORT || 8082, () => {
  mongoose.connect(process.env.MONGO_URL || "mongodb://root:root@localhost:27017/climatempo_db?authSource=admin").then((connection:Mongoose) => {
    populate(connection);
  }).catch(error => {
    console.log(error);
    console.log("Error in connect in database");
  }) 
    console.log(
      `Server is running at ${process.env.HTTP_PORT}`
      );
});
