const express = require("express")
const app = express()
const eventRoute = require("./Route/route")
const mongoose = require('mongoose');

const DB = "mongodb+srv://PARTH:parth1213@cluster0.bk4ibny.mongodb.net/mearnstack?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{console.log("Connected");}).catch((err)=>{console.log("err");})
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(eventRoute)
app.get("/",(req,res)=>{
    res.send("ok")
})

app.listen(3000,console.log("app is running on port 3000"))