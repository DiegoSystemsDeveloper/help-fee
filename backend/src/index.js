import express from 'express'
import morgan from 'morgan'
import cors from 'cors';
import router from './routes/userRoutes.js'
import conectar from './config/database.js';
import dotenv from 'dotenv'


//Initializations
const app = express()
dotenv.config()
conectar()

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//Routing
app.use('/api/usuarios',
    router)

app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
})