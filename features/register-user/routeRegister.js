import express from "express";
import { addEmployee } from "./controller.js";

const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("hello");
});

router.post("/register", addEmployee);

export default router;
