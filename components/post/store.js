const Post = require('./model')

const getPosts = async () => await Post.find()

const createPost = post => {
    const createdPost = new Post(post)
    return createdPost.save()
    
}

module.exports = {
    getPosts,
    createPost
}