
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // References the 'Product' model
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    totalAmount: {
        type: Number,
        min: 0
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    address: [
        {
            shoppingaddress: String,
            streetaddress: String,
            country: String,
            towncity: String,
            state: String,
            zipCode: String
        }

    ],
    paymentDetails: [
        {
            cardnumber: String,
            expirydate: String,
            cvv: String
        }
    ],
});

export const Order = mongoose.model("order", orderSchema)
