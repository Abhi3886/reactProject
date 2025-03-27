import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

//used this func when we need to protect some pages from the Guest user
export const Authorization = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token)
    return res.status(401).json({ error: "Access Denied! No token provide" });
  try {
    const verifyToken = jwt.verify(token.replace("Bearer", ""));
    req.user = verifyToken;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid Token" });
  }
};
