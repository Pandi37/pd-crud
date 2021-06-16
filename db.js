const mongoose = require('mongoose')
const dotenv = require('dotenv')

const url = "mongodb+srv://pandi:durai@cluster0.gcak9.mongodb.net/postManagerDB?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })