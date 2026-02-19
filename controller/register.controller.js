import db from "../config/db.js";
import bcrypt from "bcrypt";

export const registerUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // hash password
    const hashPass = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashPass],
    );

    res.status(201).json({
      id: result.insertId,
      name: name,
      email: email,
      password: hashPass,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error Create",
      error: error,
    });
  }
};
