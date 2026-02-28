import db from "../config/db.js"

// get all data categories
export const getCategories = async () => {
    const [result] = await db.query("SELECT * FROM categories")
    return result
}

// get data categories by id
export const getCategoriesById = async (id) => {
    const [result] = await db.query("SELECT * FROM categories WHERE id = ?", [id])
    return result
}

// create data categories
export const createCategories = async (category_code, category_name) => {
    const [result] = await db.query("INSERT INTO categories (category_code, category_name) VALUES (?, ?)", [category_code, category_name])
    return result
}

// update data categories
export const updateCategories = async (id, category_code, category_name) => {
    const [result] = await db.query("UPDATE categories SET category_code = ?, category_name = ? WHERE id = ?", [category_code, category_name, id])
    return result
}

// delete data categories
export const deleteCategories = async (id) => {
    const [result] = await db.query("DELETE FROM categories WHERE id = ?", [id])
    return result
}
