const ko = require("nekodb")

const Article = ko.Model("Article", {
  title: ko.String,
  href: ko.String,
  date: ko.Date
})

module.exports = Article