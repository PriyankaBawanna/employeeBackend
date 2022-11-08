import express from "express";
import { loginEmployee } from "./controller.js";
const router = express.Router();

router.post("/empLogin", loginEmployee);
export default router;
