import { getCategory } from '../../../utils/database/models/category'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const listOfCategories = await getCategory()
      res.status(200).json(listOfCategories)
      break
    case 'POST':
      res.status(405).json({ error: '10', message: 'Method not found' })
      break
    default:
      res.status(405).json({ error: '10', message: 'Method not found' })
      break
  }
}
