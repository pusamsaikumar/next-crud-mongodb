import mongoose from "mongoose"

export const mongoDbConnect =async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
    }catch(err){
        console.error(err)
    }
}

export default mongoDbConnect;