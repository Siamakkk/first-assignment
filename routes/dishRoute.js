const express = require('express')
const bodParser = require('body-parser')
const bodyParser = require('body-parser')

const dishRouter = express.Router()

dishRouter.use(bodyParser.json())

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})
.get((req, res) => {
    res.end('Will send you all the dishes')
})
.post((req, res) => {
    res.end(`Will add ${req.body.name} with detail : ${req.body.description} to the list`)
})
.put((req, res) => {
    res.statusCode = 403
    res.send('PUT method nost supported on /dishes')
})
.delete((req, res) => {
    res.end('Dleting all the dishes !!!')
})

module.exports = dishRouter