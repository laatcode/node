const Post = require('./model')

const getPosts = async () => await Post.find()

const createPost = post => {
    const createdPost = new Post(post)
    return createdPost.save()
    
}

const updatePost = async (postId, post) => {

    console.log('store')

    let postFound = await Post.findOne({
        _id: postId
    })

    postFound = {
        ...postFound,
        title: post.title,
        content: post.content,
        updatedAt: post.updatedAt,
        updatedBy: post.updatedBy
    }

    const result = postFound.save()

    return result
}

module.exports = {
    getPosts,
    createPost,
    updatePost
}