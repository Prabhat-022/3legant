import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    level: {
        type: String,
        tirm: true,
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    discountPrice: {
        type: String,
        required: true,
        trim: true
    },
    image: [{
        url: {
            type: String,
            required: true,
            trim: true
        },
    }],

    category: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true,
        trim: true
    },
    additionalInfo: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    moreInfo: {
        type: String,
        trim: true
    },
    rating: {
        type: String,
        trim: true,
        required: true

    },
    quantity: {
        type: Number,
        trim: true,
        default: 1,
        required: true
    },
})

export const Product = mongoose.model("Product", productSchema);

