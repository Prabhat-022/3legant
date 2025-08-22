import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ✅ Create HTTP server
const server = http.createServer(app);


// ✅ Attach socket.io to the server
const io = new Server(server, {
    cors: {
        origin: "*", // in production, restrict to frontend domain
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
    }
});


// ✅ Handle socket connection
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Join user to their room (for private chat)
    socket.on("joinRoom", (userId) => {
        socket.join(userId);
        console.log(`${userId} joined their private room`);
    });

    // Listen for messages
    socket.on("sendMessage", ({ sender, receiver, message }) => {
        console.log(`Message from ${sender} → ${receiver}: ${message}`);

        // Send message to receiver's room
        io.to(receiver).emit("receiveMessage", { sender, message });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});



export { io, server, app }