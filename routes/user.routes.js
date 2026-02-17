import express from "express";
import {
  getUsers,
  getUserById,
  createUsers,
  updateUsers, 
  deleteUsers,
} from "../controller/user.controller.js";
import checkApiKey from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

export default router;
