// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// // DB_NAME	Database ka naam 
// const connectDB = async () => {     // Part	Function
//   try {

//     // mongoose.connect()	MongoDB se connection banata hai 
//   const connectionInstance =  await mongoose.connect
  
//   // process.env.MONGODB_URL	.env file se URL read karta hai
//         (`${process.env.MONGODB_URL}/${DB_NAME}`);

//     console.log(`\n MONGODB connected !! DB HOST:
//          ${connectionInstance.connection.host}`);

//   // try...catch	Error handling ke liye

//   } catch (error) {
//     console.error("MONGODB connection error", error);
//     process.exit(1); 
//     // process.exit(1)	App ko band kar deta hai agar connection fail ho
//   }
// }

// export default connectDB;

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB


