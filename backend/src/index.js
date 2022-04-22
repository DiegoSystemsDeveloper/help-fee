const express = require('express')
const engine = require('ejs-mate')
const morgan = require('morgan')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash')
const cors = require('cors')

//Initializations
const app = express()
require('./database')
require('./passport/local-auth')

//settings
app.set('port', process.env.PORT || 4000)
app.set('ejs', engine)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    app.locals.mensajeRegistro = req.flash('mensajeRegistro')
    app.locals.mensajeLogin = req.flash('mensajeLogin')
    app.locals.user = req.user
    next()
})

const whiteList = ["http://localhost:3000"];
const corsOptions = {
    origin: function(origin, callback) {
        if (whiteList.includes(origin)) {
            //puede consultar la api
            callback(null, true)
        } else {
            //No esta permitido
            callback(new Error("Error de cors"))
        }
    }
}
app.use(cors(corsOptions))

//static files
app.use(express.static(__dirname + '/public'));

//routes
app.use('/', require('./routes/index'))


app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
})