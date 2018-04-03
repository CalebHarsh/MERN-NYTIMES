const db = require("../models")

const Commands = {
  getAllArticles: () => {
    return db.Article.find({})
  },

  saveArticle: data => {
    return db.Article.create({
      title: data.title,
      href: data.href,
      date: Date.now()
    }).save()
  },

  deleteArticle: data => {
    return db.Article.deleteById(data)
  }
}

module.exports = Commands