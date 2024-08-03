import express from "express";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      `https://imageai-generator.p.rapidapi.com/image`,
      {
        prompt,
        negative_prompt: "",
        width: 256,
        height: 256,
        hr_scale: 2,
      },
      {
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": "imageai-generator.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );
    const image = response.data;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
});

export default router;
