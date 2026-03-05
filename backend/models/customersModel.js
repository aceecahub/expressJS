import db from "../config/db.js"

export const getCustomers = async() => {
    const [result] = await db.query("SELECT * FROM customers")
    return result
}

export const getCustomerById = async(id) => {
    const [result] = await db.query("SELECT * FROM customers WHERE id = ?", [id])
    return result
}

export const createCustomers = async(customers_code, customers_name, customers_address) => {
    const [result] = await db.query("INSERT INTO customers (customers_code, customers_name, customers_address) VALUES (?, ?, ?)", [customers_code, customers_name, customers_address])
    return result
}