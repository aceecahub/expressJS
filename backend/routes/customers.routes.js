import express from "express";
import { getCustomersController, getCustomersByIdController, createCustomersController } from "../controller/customers.controller.js"
import { verifToken } from "../middlewares/auth.middleware.js";

const router = express.Router()

router.get('/', getCustomersController)
router.get('/:id', getCustomersByIdController)
router.post('/', createCustomersController)

export default router