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
            response.error(req, res, 'Error al obtener la lista de posts')
        })
})
    .post('/', (req, res) => {
        controller.createPost(req.body.message, req.body.user)
            .then(post => response.success(req, res, post, 201))
            .catch(error => {
                console.log(error)
                response.error(req, res, 'Ocurrió un error al crear el post')
            })
    })

module.exports = router