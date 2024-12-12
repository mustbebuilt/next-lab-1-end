import mysql from "mysql2/promise";
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SCHEMA,
});
const fetchStaff = async () => {
  try {
    const query = "SELECT * FROM stafflab";
    const [rows] = await connection.execute(query);
    return rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};

const fetchStaffDetails = async (id) => {
  try {
    const query = "SELECT * FROM stafflab WHERE id = ?";
    const [rows] = await connection.execute(query, [id]);
    return rows[0] || null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};

const fetchSearch = async (searchquery) => {
  try {
    const searchPattern = `%${searchquery}%`;
    const query =
      "SELECT * FROM stafflab WHERE last_name LIKE ? OR first_name LIKE ?";
    const [rows] = await connection.execute(query, [
      searchPattern,
      searchPattern,
    ]);
    return rows || null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};

export { fetchStaff, fetchStaffDetails, fetchSearch };
