import { config } from "./config"
import mongoose from "mongoose";

const connectDB = async () => {
  try{
    mongoose.connection.on('connected', () => {
      console.log("db connect sucessfully")
    });
    mongoose.connection.on('error', (err) => {
      console.log("error to  connect db", err)
    })
    await mongoose.connect(config.dburl as string)

 
  }catch(err){

    console.error("failde to connect",err)
    process.exit(1); //stop 
  }
 
};

export default connectDB;
