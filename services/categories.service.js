import { getCategories, createCategories, getCategoriesById, updateCategories, deleteCategories } from "../models/categories.model.js";

// get data categories
export const getCategoriesServ = async (req, res) => {
const categories = await getCategories(req, res);
return categories;
}

// get data categories by id
export const getCategoriesByIdServ = async (id) => {
const categories = await getCategoriesById(id);
if (categories.length === 0) {
throw new Error("Categories not found");
} else {
return categories;
}
}

// create data categories
export const createCategoriesServ = async (category_code, category_name) => {
if (!category_code && !category_name) {
throw new Error("Category code and category name are required");
}
if (!category_code) {
throw new Error("Category code is required");
}
if (!category_name) {
throw new Error("Category name is required");
}

const categories = await createCategories(category_code, category_name);
return {
id: categories.insertId,
category_code: category_code,
category_name: category_name,
};
}


// update data categories
export const updateCategoriesServ = async (id, category_code, category_name) => {
if (!category_code && !category_name) {
throw new Error("Category code and category name are required");
}
if (!category_code) {
throw new Error("Category code is required");
}
if (!category_name) {
throw new Error("Category name is required");
}

const categories = await updateCategories(id, category_code, category_name);
return {
id: id,
category_code: category_code,
category_name: category_name,
};
}

// delete data categories
export const deleteCategoriesServ = async (id) => {
if (!id) {
throw new Error("Id is required");
}

const categories = await deleteCategories(id);
return {
id: id,
message: "Categories deleted successfully",
};
}
