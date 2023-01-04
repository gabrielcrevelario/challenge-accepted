import  express from "express";
import routers from "./routes/weatherRoute";
import { config } from "dotenv";
import populate from "../utils/populateDb";
config()
import mongoose, { Mongoose } from "mongoose";
const server = express(); 
server.use(express.json());
server.use(routers);

server.listen(process.env.HTTP_PORT || 4002, () => {
  mongoose.connect(process.env.MONGO_URL || "mongodb://root:root@localhost:27017/climatempo_db?authSource=admin").then((connection:Mongoose) => {
    populate(connection);
  }).catch(error => {
    console.log("Error in connect in database");
  }) 
    console.log(
      `Server is running at ${process.env.HTTP_PORT}`
      );
});
