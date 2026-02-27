import { getCategories, createCategories } from "../models/categories.model.js";

export const getCategoriesServ = async (req, res) => {
const categories = await getCategories(req, res);
return categories;
}
export const createCategoriesServ = async (category_code, category_name) => {
if (!category_code || !category_name) {
throw new Error("Category code and category name are required");
}

const categories = await createCategories(category_code, category_name);
return {
id: categories.insertId,
category_code: category_code,
category_name: category_name,
};
}
