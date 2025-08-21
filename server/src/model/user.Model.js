import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        trim:true
    },
    Lastname:{
        type:String,
        trim:true
    },
    Fullname:{
        type:String,
        trim:true, 
        index: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true, 
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String
    },
    image:{
        type:String
    },
    role:{
        type:String,
        enum:['user', 'admin'],
        default:'user'
    },

    address:[
        {
            shoppingaddress:String,
            streetaddress:String,
            country:String,
            towncity:String,
            state:String,
            zipCode:String
        }
      
    ],
    paymentDetails:[
        {
            cardnumber:String,
            expirydate:String,
            cvv:String
        }
    ],
    newslatterEmail:{
        type:String
    }
}, {timestamps:true})

export const User = mongoose.model("user", userSchema)
