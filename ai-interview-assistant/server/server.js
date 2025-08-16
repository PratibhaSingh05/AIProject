import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ["http://localhost:5173", "https://ai-project-ten-peach.vercel.app/"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// ✅ New test route for frontend connection check
app.get("/api/test", (req, res) => {
  res.json({ message: "✅ Backend is connected to Frontend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});