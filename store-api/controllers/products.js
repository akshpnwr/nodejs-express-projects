const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
  const search = 'ACC'

  const products = await Product.find({
    name: { $regex: search, $options: 'i' },
  })

  res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query

  const queryObject = {}

  if (featured) queryObject.featured = featured === 'true'
  if (company) queryObject.company = company
  if (name) queryObject.name = { $regex: name, $options: 'i' }

  console.log(queryObject)
  const products = await Product.find(queryObject)
  res.status(200).json({ products, nbHits: products.length })
}

const getProduct = (req, res) => {
  res.status(200).json({ msg: 'Getting single product' })
}

const createProduct = (req, res) => {
  res.status(200).json({ msg: 'create product' })
}

const deleteProduct = (req, res) => {
  res.status(200).json('delete product')
}

module.exports = {
  getAllProductsStatic,
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
}
