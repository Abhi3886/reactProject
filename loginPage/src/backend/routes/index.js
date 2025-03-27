import express from "express";
import SignUpAuth from "./SignUpAuth.js";
import LogInAuth from "./LogInAuth.js";

const routes = express.Router();

routes.use("/", SignUpAuth);
routes.use("/", LogInAuth);

export default routes;
