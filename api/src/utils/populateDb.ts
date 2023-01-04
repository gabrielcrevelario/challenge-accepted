import { Mongoose } from "mongoose";
import weatherData from "./weatherData";
const populate = async (connection:Mongoose) =>  {
    try {
        if(!(await connection.connection.db.collections()).find(x => x.collectionName === "weather"))  connection.connection.db.collection("weather").insertMany(JSON.parse(weatherData || "{}"))
    } catch (error) {
        console.log(error);       
    }
}
export default populate;