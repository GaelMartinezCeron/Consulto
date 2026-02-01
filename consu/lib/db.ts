import mysql from "mysql2/promise"

// Configuracion de conexion a MySQL local (phpMyAdmin)
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "webconsul",
  port: Number(process.env.DB_PORT) || 3306,
}

export async function getConnection() {
  const connection = await mysql.createConnection(dbConfig)
  return connection
}

export async function query<T>(sql: string, params?: unknown[]): Promise<T> {
  const connection = await getConnection()
  try {
    const [results] = await connection.execute(sql, params)
    return results as T
  } finally {
    await connection.end()
  }
}
