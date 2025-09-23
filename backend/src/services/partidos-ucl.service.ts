import pool from "../config/db.js";

export const obtenerPartido = async () => {
  const [rows] = await pool.query("SELECT * FROM partidos_ucl ORDER BY RAND() LIMIT 1;");
  return rows;
};