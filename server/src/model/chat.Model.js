import mongoose from "mongoose";
import { z } from "zod";

// Zod validation schema
export const ChatSchema = z.object({
    sender: z.string().min(1, "Sender ID is required"),
    receiver: z.string().min(1, "Receiver ID is required"),
    message: z.string().min(1, "Message cannot be empty"),
    isRead: z.boolean().optional(),
});

// Mongoose schema (for DB)
const chatSchema = new mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        message: [
            {
                type: String,
                required: true,
                trim: true
            }],
        isRead: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export const ChatModel = mongoose.model("Chat", chatSchema);
