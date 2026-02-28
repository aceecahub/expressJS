import { getCategoriesServ, createCategoriesServ, getCategoriesByIdServ, updateCategoriesServ, deleteCategoriesServ } from "../services/categories.service.js";

// get all categories
export const getCategoriesController = async (req, res) => {
    try {
        const categories = await getCategoriesServ(req, res);
        return res.status(200).json({
            message: "Categories fetched successfully",
            data: categories,
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

// get categories by id
export const getCategoriesByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const categories = await getCategoriesByIdServ(id);
        if (categories.length === 0) {
            return res.status(404).json({
                message: "Categories not found",
            })
        } else {
            return res.status(200).json({
                message: "Categories fetched successfully",
                data: categories,
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

// create categories
export const createCategoriesController = async (req, res) => {
    const { category_code, category_name } = req.body;
    try {
        const categories = await createCategoriesServ(category_code, category_name)
        return res.status(201).json({
            message: "Categories created successfully",
            data: categories,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}

// update categories
export const updateCategoriesController = async (req, res) => {
    const { id } = req.params;
    const { category_code, category_name } = req.body;
    try {
        const categories = await updateCategoriesServ(id, category_code, category_name)
        if (categories.length === 0) {
            return res.status(404).json({
                message: "Categories not found",
            })
        } else {
            return res.status(200).json({
                message: "Categories updated successfully",
                data: categories,
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}

// delete categories
export const deleteCategoriesController = async (req, res) => {
    const { id } = req.params;
    try {
        const categories = await deleteCategoriesServ(id)
        if (categories.length === 0) {
            return res.status(404).json({
                message: "Categories not found",
            })
        } else {
            return res.status(200).json({
                message: "Categories deleted successfully",
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}
