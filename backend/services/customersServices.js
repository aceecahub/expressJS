import { getCustomers, getCustomerById, createCustomers } from "../models/customersModel.js";

// get all data customers
export const getCustomersServ = async() => {
    const customers = await getCustomers()
    try{
        throw new Error("Customers not found")
    }
    catch(error){
        return {
            message: "Customers not found",
            error
        }
    }
}

// get data customers BY ID
export const getCustomersByIdServ = async(id) => {
    try{
        const customer = await getCustomerById(id)
        return {
            message: "Customer fetched successfully",
            customer
        }
    }
    catch(error){
        return {
            message: "Customer not found",
            error
        }
    }
}

// create data customers
export const createCustomersServ = async(customers_code, customers_name, customers_address) => {
    const customers = await createCustomers(customers_code, customers_name, customers_address)
    return customers
}
