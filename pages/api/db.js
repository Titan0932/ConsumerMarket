import db from '../../modules/db'

export default async function handler(req, res) {
    const products = await db.product_Table.findMany();
    res.status(200).json(products);
  }