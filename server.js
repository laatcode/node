const express = require('express')
const PORT = process.env.PORT || 5000
const routes = require('./network/routes')
const db = require('./db/config')
const app = express()

app.use(express.json())
routes(app)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))