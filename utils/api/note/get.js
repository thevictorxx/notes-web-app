import { v4 as uuidv4 } from 'uuid'

export default function noteMehtodGet(req, res) {
  res.status(200).json({ note: uuidv4() })
}
