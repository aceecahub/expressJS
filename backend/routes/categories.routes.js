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

router.get("/", verifToken, getCategoriesController);
router.post("/", verifToken, createCategoriesController);
router.get("/:id", verifToken, getCategoriesByIdController);
router.put("/:id", verifToken, updateCategoriesController);
router.delete("/:id", verifToken, deleteCategoriesController);

export default router;
