import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { connectDB } from "./DB/DataBase.js";

dotenv.config();
const PORT = 5000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json()); //Middleware use either express.json() {json data} or express.urlencoded() {during form submission}

app.get("/", (req, res) => {
  res.send("🚀 Server is running and connected to MySQL");
});

app.use("/api", routes);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error(" Database connection failed:", error.message);
  }
});
