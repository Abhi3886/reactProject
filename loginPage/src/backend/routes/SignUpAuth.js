import express from "express";
import bcrypt from "bcryptjs";
import { connectDB } from "../database/DataBase.js";

const SignUpAuth = express.Router();

SignUpAuth.post("/Sign-up", async (req, res) => {
  const { fullname, username, email, password } = req.body;

  try {
    const db = await connectDB();

    const queryToCheck = `SELECT username, email FROM users WHERE email = ? OR username = ?`;
    const [existingUser] = await db.execute(queryToCheck, [email, username]);

    if (existingUser.length > 0) {
      return res
        .status(400)
        .json({ error: "Username or Email already exists" });
    }

    //Hash Password
    const hashPass = await bcrypt.hash(password, 10);

    const query = `INSERT INTO users (fullname, username, email, password) VALUES (?, ?, ?, ?)`;
    await db.execute(query, [fullname, username, email, hashPass]);

    res
      .status(201)
      .json({ message: "User Registered Successfully", tohide: true });

    db.end();
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default SignUpAuth;
