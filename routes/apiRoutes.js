const router = require("express").Router()
const path = require("path")
const Command = require("../controllers/artController.js")


router.get("/api/articles", (req, res) => {
  Command.getAllArticles()
  .then(data => {
    res.json(data)
  })
  .catch(err => res.send(err))
})

router.post("/api/articles", (req, res) => {
  Command.saveArticle({
    title: req.body.headline.main,
    href: req.body.web_url
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => res.send(err))
})

router.delete("/api/articles/:id", (req, res) => {
  Command.deleteArticle(req.params.id)
  .then(data => res.sendStatus(200))
  .catch(err => res.send(err))
})

// router.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


module.exports = router