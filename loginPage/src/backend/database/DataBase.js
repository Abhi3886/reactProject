import dotenv from "dotenv";
import mysql from "mysql2/promise";

// Load environment variables
dotenv.config();

console.log(process.env.MYSQL_USER);

export const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_PUBLIC_URL,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT,
    });

    console.log("Connected to Local MySQL Database ");
    return connection;
  } catch (err) {
    console.error("Database connection failed:", err.message);
    throw err;
  }
};
