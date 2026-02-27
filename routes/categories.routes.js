import express from "express";
import { getCategoriesController, createCategoriesController } from "../controller/categories.controller.js";
import { verifToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifToken, getCategoriesController);
router.post("/", verifToken, createCategoriesController);

export default router;