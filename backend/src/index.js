import express from 'express'
import morgan from 'morgan'
import cors from 'cors';
import routerUsuarios from './routes/userRoutes.js'
import routerEntidades from './routes/entitieRoutes.js'
import routerProductos from './routes/productRoutes.js'
import conectar from './config/database.js';
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

//swagger
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        description: "Es una API que maneja la informacion de la BD de Help Fee ",
        contact: {
            name: 'Diego Perez'
        },
        info: {
            title: "Help fee MongoDB API",
            version: "1.0.0"
        },
        servers: [{
            url: 'http://localhost:4000'
        }]
    },
    apis: [`${path.join(__dirname, './controllers/*.js')}`],
}
const swaggerDoc = swaggerJsDoc(swaggerSpec)

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

//Configurar cors
const whiteList = [process.env.FRONTEND_URL]
const corsOption = {
    origin: function(origin, callback) {
        console.log(origin)
        if (whiteList.includes(origin)) {
            //Puede ingresar a la api
            callback(null, true)
        } else {
            //No puede ingresar a la api
            callback(new Error('Error de cors'))

        }
    }
}

app.use(cors(corsOption))

//Routing
app.use('/api/usuarios', routerUsuarios)
app.use('/api/entidades', routerEntidades)
app.use('/api/productos', routerProductos)

app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
})