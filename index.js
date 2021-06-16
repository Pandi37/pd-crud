require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

const port = process.env.PORT || 4000;

dotenv.config();

var postMessageRoutes = require('./controllers/postMessageController')


var app = express()
app.use(bodyParser.json())
app.use(cors({
              //origin:'https://pd-crud.netlify.app/',
              credentials: true}))
app.listen(port, () => {
    console.log(`Server started at : ${port}`)
})
  

app.get("/", function (req, res){
    res.send("Working..!");
});


app.use('/postMessages',postMessageRoutes)