import mongoose from "mongoose";

const mongo_url = process.env.MONGO_URL!

export async function connect(){
    try {
        mongoose.connect(mongo_url)
        const connection = mongoose.connection
        connection.on('connected',()=> console.log('Connected to DB...'))
        connection.on('error',(err)=>{
             console.log('MongoDB connection error, Please make sure MongoDB is running. '+  err)
             process.exit()
        })
    } catch (error) {
        console.log('Something goes wrong...!');
        console.log(error);
        
    }
}