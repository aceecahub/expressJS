import express from "express";
import {
  getallController,
  getbyidController,
  updateController, 
  deleteController,
} from "../controller/user.controller.js";
import { verifToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifToken, getallController);
router.get("/:id", verifToken, getbyidController);
router.put("/:id", verifToken, updateController);
router.delete("/:id", verifToken, deleteController);

export default router;
