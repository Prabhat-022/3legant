

import { ChatSchema, ChatModel } from "../model/chat.Model.js";

export const createChat = async (req, res) => {
  try {
    const { receiver, message } = req.body;
    const sender = req.user.userId;

    // ✅ Validate request data with Zod
    const parsed = ChatSchema.parse({ sender, receiver, message });

    // ✅ Save to MongoDB with Mongoose
    const chat = await ChatModel.create(parsed);

    res.status(201).json(chat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getChats = async (req, res) => {
    try {
        const chats = await ChatSchema.find({
            $or: [
                { sender: req.user.userId },
                { receiver: req.user.userId }
            ]
        });
        res.json(chats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateChat = async (req, res) => {
    try {
        const { chatId, message } = req.body;
        const chat = await ChatSchema.findByIdAndUpdate(chatId, { message }, { new: true });
        res.json(chat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteChat = async (req, res) => {
    try {
        const chat = await ChatSchema.findByIdAndDelete(req.params.chatId);
        if (!chat) return res.status(404).json({ message: "Chat not found" });

        res.json({ message: "Chat deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

