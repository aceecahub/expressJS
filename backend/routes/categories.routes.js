import express from "express";
import {
  getCategoriesController,
  createCategoriesController,
  getCategoriesByIdController,
  updateCategoriesController,
  deleteCategoriesController,
} from "../controller/categories.controller.js";
import { verifToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getCategoriesController);
router.post("/", createCategoriesController);
router.get("/:id", getCategoriesByIdController);
router.put("/:id", updateCategoriesController);
router.delete("/:id", deleteCategoriesController);

export default router;
