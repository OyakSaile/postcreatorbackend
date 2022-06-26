const express = require('express');
const router = express.Router()
const controller = require('../controllers/postController')

router.get('/', controller.get)

router.delete("/:id", controller.delete)
router.put("/edit", controller.put)
router.post('/add', controller.post)


module.exports = router