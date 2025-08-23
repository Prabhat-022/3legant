import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    discountPrice: {
        type: String
    },
    mesurement: {
        type: String
    },
    color: {
        type: String
    },
    categories: {
        type: String
    },
    additionalDetails: {
        type: String
    },
    rating: {
        type: Number
    },
    image: [{
        url: {
            type: String,
            // required: true,
            trim: true
        },
    }],
    packaging: [
        {
            width: String
        },
        {
            weight: String
        },
        {
            package: String
        }
    ],
    question: [
        {
            qns: String
        },
        {
            ans: String
        }
    ],
    reviews: {
        type: String
    },
    stock: {
        type: Number
    },
    badge: {
        type: String,
        enum: ['New', 'Best Seller', 'Hot', 'Sale', 'Premium', 'Deal'],
        default: 'New'
    }




})

export const Product = mongoose.model("product", productSchema)