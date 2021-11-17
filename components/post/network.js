const response = require('../../network/reponse')
const router = require('express').Router()
const controller = require('./controller')

router.get('/', (req, res) => {
    controller.getPosts()
        .then(postList => {
            response.success(req, res, postList)
        })
        .catch(error => {
            console.error(error)
            response.error(req, res, error)
        })
})
    .post('/', (req, res) => {
        controller.createPost(req.body.title, req.body.content, req.body.user)
            .then(post => response.success(req, res, post, 201))
            .catch(error => {
                console.log(error)
                response.error(req, res, error)
            })
    })

    .patch('/:id', (req, res) => {
        controller.updatePost(req.params.id, req.body.title, req.body.content, req.body.user)
            .then(post => response.success(req, res, post))
            .catch(error => {
                console.log(error)
                response.error(req, res, error)
            })
    })

module.exports = router