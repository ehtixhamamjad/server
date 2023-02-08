import mongoose from "mongoose";

export const connectDatabase= async()=>{
    try {
        mongoose.set("strictQuery", false);
        const {connection} =await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb Connnected: ${connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}