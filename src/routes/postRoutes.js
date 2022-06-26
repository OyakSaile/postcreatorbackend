const express = require('express');
const router = express.Router()
const Post = require('../models/Post')
const controller = require('../controllers/postController')

router.get('/', controller.get)

router.delete("/:id", controller.delete)

router.post('/add', controller.post)


module.exports = router