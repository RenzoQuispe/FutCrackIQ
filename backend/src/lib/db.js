import mysql from 'mysql2';//npm install mysql2
import dotenv from "dotenv";
dotenv.config();

// Configura la conexión con MySQL en AWS
export const pool = mysql.createPool({
    host: process.env.AMAZON_RDS_HOST,
    user: process.env.AMAZON_RDS_USER,
    password: process.env.AMAZON_RDS_PASSWORD,
    database: process.env.AMAZON_RDS_DATABASE, // NO es el ID de instancia de base de datos (Es el Nombre de base de datos, no es lo mismo)
    port: process.env.AMAZON_RDS_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Función para probar la conexión
export const conexionDB = () => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error("Error al conectar con la base de datos:", err.message);
        } else {
            console.log("Conexión a la base de datos establecida correctamente.");
            connection.release();
        }
    });
};