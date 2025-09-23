import "dotenv/config";
import app from "./app.js";
import pool from "./config/db.js";

const PORT = process.env.PORT;

async function main() {
  try {
    // Probar conexión a la base de datos
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    console.log("Conexión a MySQL exitosa");
    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" Error al conectar a la base de datos:", error);
    process.exit(1);
  }
}

main();
