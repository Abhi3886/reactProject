import express from "express";
import bcrypt from "bcryptjs";
import { connectDB } from "../DB/DataBase.js";

const LogInAuth = express.Router();

LogInAuth.post("/Log-in", async (req, res) => {
  const { username, password } = req.body;

  try {
    const db = await connectDB();

    const queryToCheck = `SELECT username, password FROM users WHERE  username = ?`;
    const [user] = await db.execute(queryToCheck, [username]);

    if (user.length === 0) {
      return res.status(400).json({ error: "User not Exsits" });
    }

    const userData = user[0];

    //Compare passwords
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(201).json({ message: "Login Successfully" });

    db.end();
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default LogInAuth;
