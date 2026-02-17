import db from "../config/db.js";

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
  const id = req.params.id;
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

// create data user
export const createUsers = async (req, res) => {
  try {
    const { name } = req.body;

    const [result] = await db.query("INSERT INTO users (name) VALUES (?)", [
      name,
    ]);
    res.status(201).json({
      id: result.insertId,
      name: name,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error Create", error: error });
  }
};
