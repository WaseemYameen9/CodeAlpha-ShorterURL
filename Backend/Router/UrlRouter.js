const UrlController = require('../Controller/UrlController')
const express = require("express")
const router = express.Router()

router.post('/getShorterUrl',UrlController.CreateShorterUrl)
router.get('/:shorterUrl', UrlController.ReturnOriginalUrl)

module.exports = router