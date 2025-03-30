import dotenv from "dotenv";
import express from "express";
import routes from "./routes/index.js";
import { connectDB } from "./database/Database.js";
import cors from "cors";
import { Authorization } from "./middleware/Authorization.js";

dotenv.config();
const PORT = 5000;

const app = express();
app.use(express.json()); //Middleware use either express.json() {json data} or express.urlencoded() {during form submission}
app.use(cors());

app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:5173/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("🚀 Server is running and connected to MySQL");
});

app.use("/api", routes);

//protected
app.post("/Github", Authorization, async (req, res) => {});

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
});
