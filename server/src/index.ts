import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// TODO: Add your routes here

// Example health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// TODO: Add your URL shortener routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
