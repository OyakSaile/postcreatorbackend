const Post = require('../models/Post')

exports.get = (async (req, res) => {
  Post.findAll({}).then((data) => {
    res.send(data)
  }).catch(err => {
    console.error(err)
  })
})

exports.put = (async (req, res) => {
  const { post_title, post_content, post_creator, id } = req.body

  try {
    const response = await Post.findByPk(id)
    response.post_creator = post_creator
    response.post_title = post_title
    response.post_content = post_content
    console.log(response)
    const save = await response.save()
    console.log(save)

    res.send('Finalizado e editado')
  }

  catch (err) {
    console.log(err)
    res.send('Erro')
  }
})

exports.delete = (async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (post === null) {
    res.send('Não foi encontrado este ID')
  } else {
    try {
      const response = await post.destroy()

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

exports.post = (async (req, res) => {
  let { post_title, post_creator, post_content } = req.body
  try {
    const response = await Post.create({
      post_title,
      post_creator,
      post_content
    })
    if (response) {
      res.send('Data')
    }
  } catch (err) {
    res.send('Ocorreu um erro.')
  }

})
