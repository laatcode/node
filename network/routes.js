const posts = require('../components/post/network')

const routes = server => {
    server.use('/posts', posts)
}

module.exports = routes