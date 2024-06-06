const express = require("express")
const bodyParser = require("body-parser")
const db = require('./Services/db')
const urlRouter = require('./Router/UrlRouter')
const cors = require("cors");

const app = express()
app.use(bodyParser.json())
app.use(
    cors({
      origin: function (origin, callback) {
        return callback(null, true);
      },
      optionsSuccessStatus: 200,
      credentials: false,
    })
  );
app.use(urlRouter)

app.listen(5000, ()=>{
    console.log("Server is listening on Port 5000")
})