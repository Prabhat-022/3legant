
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
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
    created_at:
    {
        type: Date,
        default: Date.now
    },
    isagree: {
        type: Boolean,
        default: false
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
});

export const Admin = mongoose.model('Admin', adminSchema)