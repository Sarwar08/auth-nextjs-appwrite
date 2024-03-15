import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!
            // "mongodb+srv://sarwar:sarwar123@cluster0.e8i0ajb.mongodb.net/"
            )
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log("MongoDB connected successfully");
        })

        connection.on("error", (err)=>{
            console.log("MongoDB connection error. Please make sure MongoDB is Running" + err);
            process.exit();
        })

    }catch(error){
        console.log("somthing goes wrong");
        console.log(error)
    }
}