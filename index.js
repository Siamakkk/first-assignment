const express = require('express')
const http = require('http')
const morgan = require('morgan')


const hostName = 'localhost'
const port = 3000


const app = express()

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public/html'))
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 404
    res.end('<html><body><h1>Error : 404 Not Found</h1></body></html>')
})

const server = http.createServer(app)
server.listen(port, hostName, () => {
    console.log(`the server is running on : http://${hostName}:${port}`)
})