import mongoose from "mongoose";
const dbconnection =async ()=>{
    try {
       let res = await mongoose.connect('mongodb://127.0.0.1:27017/online-store');
        console.log(`db connection successfully ${res.connection.host}`)
    } catch (error) {
       console.log(error,"error in mongodb") 
    }
}

export default dbconnection;