import db from "./config/db.js";

try {
  const connection = await db.getConnection();
  console.log("Database connected!");
  connection.release();
} catch (error) {
  console.error("Database gagal connect:", error);
}
