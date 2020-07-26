//importing external module
const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//importing local module
const dishRouter = require('./routes/dishRoute')
const promotionRouter = require('./routes/promotionsRoute')
const leaderRouter = require('./routes/leadersRoute')

//host detail
const hostName = 'localhost'
const port = 3000

const app = express()

//usin middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

//setting up Routes
//dishes route
app.use('/dishes', dishRouter)
//promotions route
app.use('/promotions', promotionRouter)
//leaders route
app.use('/leaders', leaderRouter)


//default page and rendering static HTML
app.use(express.static(__dirname + '/public/html'))
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 404
    res.end('<html><body><h1>Error : 404 Not Found</h1></body></html>')
})

//running server using httml built in modeule
const server = http.createServer(app)
server.listen(port, hostName, () => {
    console.log(`the server is running on : http://${hostName}:${port}`)
})
