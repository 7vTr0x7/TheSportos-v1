import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { initializeDatabase } from "./db/db.connection.js";
import cors from "cors";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";

const app = express();
const httpServer = createServer(app); // Create an HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: [
      "https://the-sportos-v1-frontend.vercel.app",
      "https://the-sportos-admin.vercel.app",
    ],
    credentials: true,
  },
});

const corsOptions = {
  origin: [
    "https://the-sportos-v1-frontend.vercel.app",
    "https://the-sportos-admin.vercel.app",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.set("io", io);

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

initializeDatabase();

io.on("connection", (socket) => {
  socket.on("dataUpdated", () => {
    io.emit("dataUpdated"); // Ensure event names match frontend
  });

  socket.on("disconnect", () => {});
});

const PORT = 4000;
httpServer.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
