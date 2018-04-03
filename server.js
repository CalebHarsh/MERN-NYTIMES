const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


const routes = require("./routes/apiRoutes.js")
// Send every request to the React app
// Define any API routes before this runs
app.use(routes)

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
