const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Your Next.js frontend URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("🔌 User connected:", socket.id);

  // Register user and join room
  socket.on("register_user", (userId) => {
    if (typeof userId === "string" && userId.trim() !== "") {
      socket.join(userId);
      socket.data.userId = userId;
      console.log(`✅ User ${userId} registered and joined room ${userId}`);
    } else {
      console.log(`⚠️ Invalid userId received from socket ID ${socket.id}`);
    }
  });

  // Handle private messages
  socket.on("send_message", ({ to, message }) => {
    if (typeof to === "string" && to.trim() !== "") {
      io.to(to).emit("receive_message", { from: socket.data.userId, message });
      console.log(`📩 Message sent from ${socket.data.userId} to ${to}: ${message}`);
    } else {
      console.log(`⚠️ Invalid recipient userId: ${to}`);
    }
  });

  // Handle typing indicator
  socket.on("typing", (toUserId) => {
    if (typeof toUserId === "string" && toUserId.trim() !== "") {
      socket.to(toUserId).emit("typing", socket.data.userId);
      console.log(`✍️ ${socket.data.userId} is typing to ${toUserId}`);
    }
  });

  socket.on("stop_typing", (toUserId) => {
    if (typeof toUserId === "string" && toUserId.trim() !== "") {
      socket.to(toUserId).emit("stop_typing", socket.data.userId);
      console.log(`✍️ ${socket.data.userId} stopped typing to ${toUserId}`);
    }
  });

  socket.on("disconnect", () => {
    const userId = socket.data.userId;
    if (userId) {
      console.log(`❌ User ${userId} disconnected`);
    } else {
      console.log(`❌ A user disconnected without registering`);
    }
  });
});

server.listen(5000, () => {
  console.log("🚀 Socket.IO server running on http://localhost:5000");
});
