import config from '../config'
import mysql from 'mysql2/promise'

export const getCategory = async () => {
  const connection = await mysql.createConnection(config)

  const [rows] = await connection.query('SELECT * FROM category')
  await connection.end()
  return rows
}
