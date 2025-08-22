import express from "express";
import { createChat, deleteChat, getChats, updateChat } from "../controllers/chat.Controller.js";
import authenticate from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/chat", authenticate, createChat);
router.get("/chat", authenticate, getChats);
router.put("/chat/:chatId", authenticate, updateChat);
router.delete("/chat/:chatId", authenticate, deleteChat);

export default router;
