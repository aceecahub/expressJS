import db  from "../config/db.js";
import bcrypt from "bcrypt";

// get all data user
export const getUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.status(200).json({
      rows: rows,
      message: "User fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetched Error",
      error: error,
    });
  }
};

// get data user by id
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (rows.length === 0) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        rows: rows,
        message: "User fetched successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Fetched Error",
      error: error,
    });
  }
};

// create data user no hash password
// export const createUsers = async (req, res) => {
//   const { name } = req.body;

//   try {
//     const [result] = await db.query("INSERT INTO users (name) VALUES (?)", [
//       name,
//     ]);
//     res.status(201).json({
//       id: result.insertId,
//       name: name,
//       message: "User created successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error Create", error: error });
//   }
// };

// update data user by id
export const updateUsers = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const hashPass = await bcrypt.hash(password, 10);

  try {
    const [rows] = await db.query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [name, email, hashPass, id]);
    res.status(200).json({
      name: name,
      email: email,
      password: hashPass,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error Update",
      error: error,
    });
  }
};

// delete data user by id
export const deleteUsers = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query("DELETE FROM users WHERE id = ?", [id]);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error Delete",
      error: error,
    });
  }
};