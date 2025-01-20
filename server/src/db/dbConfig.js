import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Mongodb connected")
    }).catch((error) => {
        console.log(`Mongodb not connected: ${error}`)
    })
}

export default connectDB