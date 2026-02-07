import express from "express";
import { getUser } from "../controller/user.controller.js";
import checkApiKey from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/:id", getUser, checkApiKey);

export default router;
