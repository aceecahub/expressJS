import express from "express";
import {
  // getUser,
  getUserById,
  createUsers,
  // updateUser, 
  // deleteUser,
  getUsers,
} from "../controller/user.controller.js";
import checkApiKey from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUsers);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

export default router;
