import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
// import postRoutes from "./routes/postRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// app.use("/api/post", postRoutes);
app.use("/api/image", imageRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from Pixie!",
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
