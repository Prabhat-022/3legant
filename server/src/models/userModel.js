import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String,
        default: null,
        trim: true
    },
    isagree:{
        type: Boolean,
        default: false,
        trim: true
    },
    role: {
        type: String,
        default: "user",
        trim: true
    },

}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
   