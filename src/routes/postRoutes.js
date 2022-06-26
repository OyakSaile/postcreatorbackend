const express = require('express');
const router = express.Router()
const Post = require('../models/Post')


router.get('/', (req, res) => {
  Post.findAll({}).then((data) => {
    res.send(data)
  }).catch(err => {
    console.error(err)
  })
})

router.delete('/:id', async (req, res) => {

  const project = await Post.findByPk(req.params.id);
  if (project === null) {
    res.send('Não foi encontrado este ID')
  } else {
    try {
      const response = await Post.destroy({
        where: {
          id: req.params.id
        }
      })

      if (response) {
        res.send('deletado')
      }
    }
    catch (err) {
      console.log(err)
      res.send("erro")
    }
  }
})


router.post('/add', (req, res) => {
  let { post_title, post_creator, post_content } = req.body
  Post.create({
    post_title,
    post_creator,
    post_content
  }).then((data) => {
    res.send(data)
  })
    .catch(err => {
      console.error(err)
    })
})


module.exports = router