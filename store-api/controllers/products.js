const getAllProducts = (req, res) => {
  res.send('Getting all products')
}

const getProduct = (req, res) => {
  res.send('Getting single product')
}

const createProduct = (req, res) => {
  res.send('create product')
}

const deleteProduct = (req, res) => {
  res.send('delete product')
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
}
