const express = require("express")
const bodyParser = require("body-parser")
const db = require('./Services/db')
const urlRouter = require('./Router/UrlRouter')

const app = express()
app.use(bodyParser.json())


app.use(urlRouter)

app.listen(3000, ()=>{
    console.log("Server is listening on Port 3000")
})