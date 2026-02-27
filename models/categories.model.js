import db from "../config/db.js"

export const getCategories = async () => {
    const [rows] = await db.query("SELECT * FROM categories")
    return rows
}

export const createCategories = async (category_code, category_name) => {
    const [result] = await db.query("INSERT INTO categories (category_code, category_name) VALUES (?, ?)", [category_code, category_name])
    return result
}
