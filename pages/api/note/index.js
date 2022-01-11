// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import noteMehtodGet from '../../../utils/api/note/get'
import noteMehtodPost from '../../../utils/api/note/post'

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      noteMehtodGet(req, res)
      break
    case 'POST':
      noteMehtodPost(req, res)
      break
    default:
      res.status(404).json({ note: 'post' })
  }
}
