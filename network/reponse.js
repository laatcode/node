exports.success = (req, res, message, status = 200) => {
    res.status(status).send({
        body: message,
        error: ''
    })
}

exports.error = (req, res, message, status = 500) => {
    res.status(status).send({
        body: '',
        error: message
    })
}