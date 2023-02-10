const express = require('express')

const {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
} = require('../controllers/products')

const router = express.Router()

router.route('/').get(getAllProducts).post(createProduct)

router.route('/:id').get(getProduct).delete(deleteProduct)

module.exports = router
