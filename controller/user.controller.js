import { getallServ, getByidServ, updateServ, deleteServ } from "../services/user.service.js";

export const getallController = async (req, res) => {
  try{
    const users = await getallServ(req, res);
    return users;
  }catch(error){
    res.status(500).json({
      message: "Error Get All Users",
      error: error,
    });
  }
};

export const getbyidController = async (req, res) => {
  try{
    const users = await getByidServ(req, res);
    return users;
  }catch(error){
    res.status(500).json({
      message: "Error Get User By Id",
      error: error,
    });
  }
};

export const updateController = async (req, res) => {
  try{
    const users = await updateServ(req, res);
    return users;
  }catch(error){
    res.status(500).json({
      message: "Error Update User",
      error: error,
    });
  }
};

export const deleteController = async (req, res) => {
  try{
    const users = await deleteServ(req, res);
    return users;
  }catch(error){
    res.status(500).json({
      message: "Error Delete User",
      error: error,
    });
  }
};