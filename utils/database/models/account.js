import config from '../config'
import bcrypt from 'bcrypt'
import mysql from 'mysql2/promise'

/**
 *
 * @param {string} mail mail of the user
 * @returns Return a array whit a object whit the user data
 */
export const getAccountByMail = async (mail) => {
  const connection = await mysql.createConnection(config)

  const [rows] = await connection.query(
    'SELECT * FROM account WHERE mail = ?',
    [mail]
  )
  await connection.end()
  return rows
}

/**
 *
 * @param {number} id id of the user
 * @returns Return a array whit a object whit the user data
 */
export const getAccountById = async (id) => {
  const connection = await mysql.createConnection(config)

  const [rows] = await connection.query('SELECT * FROM account WHERE id = ?', [
    id
  ])
  await connection.end()
  return rows
}

/**
 *
 * @param {string} username username of the user
 * @returns Return a array whit a object whit the user data
 */
export const getAccountByUsername = async (username) => {
  const connection = await mysql.createConnection(config)

  const [rows] = await connection.query(
    'SELECT * FROM account WHERE username = ?',
    [username]
  )
  await connection.end()
  return rows
}

/**
 *
 * @param {string} name name of the user
 * @param {string} lastname lastname of the user
 * @param {string} mail mail of the user
 * @param {string} username username of the user
 * @param {string} password password of the user don't encrypted
 * @param {string} profileImg profile image path of the user
 * @returns Return a empty object
 */
export const postAccount = async (
  name,
  lastname,
  mail,
  username,
  password,
  profileImg
) => {
  const connection = await mysql.createConnection(config)

  const bcryptedPassword = await bcrypt.hash(
    password,
    +process.env.HASH_SALT_PASSWORD
  )

  const [rows] = await connection.query(
    "INSERT INTO `account` (`name`, `lastname`, `mail`, `username`, `pass`, `role`, `profileImg`) VALUES (?,?,?,?,?,'3',?)",
    [name, lastname, mail, username, bcryptedPassword, profileImg]
  )
  await connection.end()
  return rows
}
