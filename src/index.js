const express = require('express')
const morgan = require('morgan')
const app = express()

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//static files
app.use('/', express.static(__dirname + '/public'))

//routes

//starting the server
app.get('/', function(req, res) {
    res.send('Help Fee')
})

app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
})
