const getAllProductsStatic = (req, res) => {
  throw new Error('testing async errors')
  res.status(200).json({ msg: 'Products test route' })
}

const getAllProducts = (req, res) => {
  res.status(200).json({ msg: 'Getting all products' })
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
