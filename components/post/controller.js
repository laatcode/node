const store = require('./store')

const getPosts = () => new Promise((resolve, reject) => {
    console.log('controller')
    store.getPosts()
        .then(data => resolve(data))
        .catch(error => reject(error))
})

const createPost = (message, user) => new Promise((resolve, reject) => {
    if(!message || !user) {
        return reject('Datos erroneos')
    }

    const actualDate = new Date()

    const post = {
        message,
        user,
        createdAt: actualDate,
        updatedAt: actualDate
    }

    resolve(store.createPost(post))
})

module.exports = {
    getPosts,
    createPost
}