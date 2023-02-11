const express = require('express')

const {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  getAllProductsStatic,
} = require('../controllers/products')

const router = express.Router()

router.route('/').get(getAllProducts).post(createProduct)
router.route('/static').get(getAllProductsStatic)
router.route('/:id').get(getProduct).delete(deleteProduct)

module.exports = router
