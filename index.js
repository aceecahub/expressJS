import db from "./config/db.js";

try{
    const conn = await db.getConnection()
    console.log("Database connected successfully")
    conn.release()
}catch(error){
    console.error("Database connection failed", error.message)
}