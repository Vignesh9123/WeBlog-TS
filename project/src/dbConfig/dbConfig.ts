import mongoose, { connection } from "mongoose";
export default async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URL!,{dbName:"WeBlog-app-testDB"})
        const connection = mongoose.connection
        connection.on("connected",()=>{
            console.log("Connected");
        })
        connection.on('error',(error)=>{
            console.log("MongoDB after connection error"+error);
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
    }
}