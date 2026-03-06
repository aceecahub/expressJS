import { getCustomersServ, getCustomersByIdServ, createCustomersServ } from "../services/customersServices.js"

export const getCustomersController = async(req, res) => {
    try{
        const customers = await getCustomersServ()
        if(customers.length === 0){
            return res.status(200).json({
                message: "Fecthed data Customers Successfully",
                data : customers
            })
        }else{
            return res.status(404).json({
                message : "Customers not found",
                data : customers
            })
        }
    }catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const getCustomersByIdController = async(req, res) => {
    try{
        const customer = await getCustomersByIdServ(req.params.id)
        if(customer.length === 0){
            return res.status(200).json({
                message: "Fecthed data Customers Successfully",
                data : customer
            })
        }else{
            return res.status(404).json({
                message : "Customers not found",
                data : customer
            })
        }
    }catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const createCustomersController = async(req, res) => {
    const { customers_code, customers_name, customers_address } = req.body
    try{
        const customer = await createCustomersServ(customers_code, customers_name, customers_address)
        return res.status(201).json({
            message: "Customer created successfully",
            data: customer
        })
    }catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
