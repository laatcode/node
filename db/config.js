const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.y8vdv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(result => console.log('DB Connected'))
    .catch(error => console.error(`DB Error: ${error}`))