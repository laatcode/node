const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
})

const model = mongoose.model('Post', postSchema)
module.exports = model