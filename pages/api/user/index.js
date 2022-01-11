import userMehtodGet from '../../../utils/api/user/get'
import userMehtodPost from '../../../utils/api/user/post'
import {
  getAccountByMail,
  getAccountByUsername,
  postAccount
} from '../../../utils/database/models/account'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      userMehtodGet(req, res)
      break
    case 'POST':
      const {
        name,
        lastname,
        mail,
        username,
        password,
        passwordConfirm,
        profileImg
      } = req.body

      if (password !== passwordConfirm) {
        res.status(400).json({ error: '10', message: 'Password not match' })
        break
      }
      const accountByEmail = await getAccountByMail(req.body.mail)

      if (accountByEmail.length > 0) {
        res.status(400).json({ error: '10', message: 'Email already exists' })
        break
      }
      const accountByUsername = await getAccountByUsername(username)

      if (accountByUsername.length > 0) {
        res
          .status(400)
          .json({ error: '10', message: 'Username already exists' })
        break
      }

      const dataInsert = postAccount(
        name,
        lastname,
        mail,
        username,
        password,
        profileImg
      )

      res.status(200).json(dataInsert)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
