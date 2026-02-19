import express from "express";
import { loginUsers } from "../controller/login.controller.js";
import { registerUsers } from "../controller/register.controller.js";

const router = express.Router();

router.post("/login", loginUsers);
router.post("/register", registerUsers);

export default router;
