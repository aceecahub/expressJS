import express from "express";
import {
  getUsers,
  getUserById,
  updateUsers, 
  deleteUsers,
} from "../controller/user.controller.js";
import { verifToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifToken, getUsers);
router.get("/:id", verifToken, getUserById);
router.put("/:id", verifToken, updateUsers);
router.delete("/:id", verifToken, deleteUsers);

export default router;
