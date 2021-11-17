const store = require('./store')

const getPosts = () => new Promise((resolve, reject) => {
    console.log('controller')
    store.getPosts()
        .then(data => resolve(data))
        .catch(error => reject(error))
})

const createPost = (title, content, user) => new Promise((resolve, reject) => {
    if(!title || !content || !user) {
        return reject('Datos erroneos')
    }

    const actualDate = new Date()

    const post = {
        title,
        content,
        createdAt: actualDate,
        createdBy: user,
        updatedAt: actualDate,
        updatedBy: user
    }

    resolve(store.createPost(post))
})

const updatePost = (postId, title, content, user) => new Promise((resolve, reject) => {
    if(!title || !content || !user) {
        return reject('Datos erroneos')
    }

    const actualDate = new Date()

    const post = {
        title,
        content,
        updatedAt: actualDate,
        updatedBy: user
    }

    resolve(store.updatePost(postId, post))
})

module.exports = {
    getPosts,
    createPost,
    updatePost
}