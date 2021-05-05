const express = require('express');
const router = express.Router();

const { getProduk } = require('../controller/Produk')
const { getHobi } = require('../controller/Hobi')

router.get('/produk', getProduk);
router.get('/hobi', getHobi);

module.exports = router