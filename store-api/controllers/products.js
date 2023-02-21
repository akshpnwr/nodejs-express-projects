const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('-name price')

  res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query

  const queryObject = {}

  if (featured) queryObject.featured = featured === 'true'
  if (company) queryObject.company = company
  if (name) queryObject.name = { $regex: name, $options: 'i' }

  console.log(queryObject)

  let results = Product.find(queryObject).limit(10)

  if (sort) {
    const sortList = sort.split(',').join(' ')
    console.log(sortList)
    results = results.sort(sort)
  } else {
    results = results.sort('createdAt')
  }

  const products = await results

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
