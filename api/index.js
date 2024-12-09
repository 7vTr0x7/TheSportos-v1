import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { initializeDatabase } from "./db/db.connection.js";
import cors from "cors";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";

const app = express();
const httpServer = createServer(app);

// Configure CORS
const corsOptions = {
  origin: [
    "https://the-sportos-v1-frontend.vercel.app",
    "https://the-sportos-admin.vercel.app",
    "http://localhost:5173",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Disable caching for API routes
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

// Initialize Socket.IO
const io = new Server(httpServer, {
  cors: {
    origin: corsOptions.origin,
    credentials: true,
  },
  transports: ["websocket"], // Force WebSocket transport for better compatibility
  wssEngine: ["ws", "wss"], // Specify the WebSocket engine to use
  path: "/socket.io/", // Ensure the correct path is set for WebSocket requests
});

app.set("io", io);

// Setup routes
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

// Initialize the database
initializeDatabase();

// Socket.IO event handlers
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Listen for 'dataUpdated' events
  socket.on("dataUpdated", () => {
    console.log("Data updated event received from client");
    io.emit("dataUpdated"); // Broadcast the event to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Define the port
const PORT = process.env.PORT || 4000;

// Start the server
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
