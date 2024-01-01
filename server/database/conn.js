import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect(`mongodb+srv://saiyedayan1:9898234502@cluster0.mutxdok.mongodb.net/`)
    console.log("Database Connected")
}