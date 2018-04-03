const ko = require("nekodb")

ko.connect({
  client: 'mongodb',
  url: process.env.MONGODB_URI || 'mongodb://localhost/nytreact'
})

const db = {
  Article: require("./Article.js")
}


module.exports = db