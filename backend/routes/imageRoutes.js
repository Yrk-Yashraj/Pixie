import express from "express";
import axios from "axios";

const router = express.Router();

// Your RapidAPI key and host, ensure these are secure
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = "";

router.post("/", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      `https://imageai-generator.p.rapidapi.com/image`,
      {
        prompt,
        negative_prompt: "",
        width: 512,
        height: 512,
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
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
});

export default router;
