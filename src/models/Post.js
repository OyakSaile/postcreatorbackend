const Sequelize = require('sequelize')
const db = require('../db/connection')


const Post = db.define('posts', {
  post_title: {
    type: Sequelize.STRING
  },
  post_content: {
    type: Sequelize.STRING
  },
  post_creator: {
    type: Sequelize.STRING
  },
})

module.exports = Post