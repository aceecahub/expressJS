import { getCategoriesServ, createCategoriesServ } from "../services/categories.service.js";

export const getCategoriesController = async (req, res) => {
    try {
        const categories = await getCategoriesServ(req, res);
        return res.status(200).json({
            message: "Categories fetched successfully",
            data: categories,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error Get Categories",
            error: error,
        })
    }
}

export const createCategoriesController = async (req, res) => {
    const { category_code, category_name } = req.body;
    try {
        const categories = await createCategoriesServ(category_code, category_name)
        return res.status(201).json({
            message: "Categories created successfully",
            data: categories,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error Create Categories",
            error: error,
        })
    }
}