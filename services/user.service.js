import { getUsers, getUserById, updateUsers, deleteUsers } from "../models/usersModel.js";

export const getallServ = async (req, res) => {
  const users = await getUsers(req, res);
  return users;
};

export const getByidServ = async (req, res) => {
  const users = await getUserById(req, res);
  return users;
};

export const updateServ = async (req, res) => {
  const users = await updateUsers(req, res);
  return users;
};

export const deleteServ = async (req, res) => {
  const users = await deleteUsers(req, res);
  return users;
};
