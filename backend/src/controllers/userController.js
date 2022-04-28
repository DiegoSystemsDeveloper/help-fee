import User from "../models/user.js"
import generarId from '../helpers/generarId.js'
import generarjwt from '../helpers/generarjwt.js'
import { emailRegistro, emailOlvideRegistro } from "../helpers/emails.js"

/***
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              nombre:  
 *                  type: string
 *                  description: nombre del usuario
 *              password:
 *                  type: string
 *                  description: password del usuario
 *              email:
 *                  type: string
 *                  description: email del usuario
 *          requerid:
 *          - nombre
 *          - email
 *          - password
 *          example:
 *              nombre: Luis Gabriel
 *              email: luis@email.com
 *              password: password
 */

/**
 * 
 * @swagger
 * 
 * /api/usuarios/:
 *  post:
 *      description: registra un nuevo usuario
 *      tags:  [User]
 *      requestBody:
 *          required: false
 *          content: 
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#components/schemas/User'
 *      responses:
 *          '200':
 *              description: Nuevo usuario registrado
 *          '500':
 *              description: Hubo un error en el servidor
 *          '400':
 *              description: Usuario ya registrado
 */

const registrar = async(req, res) => {
    //evitar registros duplicados
    const { email } = req.body
    const existeUsuario = await User.findOne({ email })

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({ msg: error.message })
    }

    try {
        const user = new User({
            nombre: req.body.nombre,
            email: req.body.email,
            password: req.body.password
        })
        user.token = generarId()
        await user.save()

        //Enviamos el email para confirmar
        emailRegistro({
            email: user.email,
            nombre: user.nombre,
            token: user.token
        })

        return res.status(200).json({ msg: 'Usuario creado correctamente, Revisa tu correo para confirmar' })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const autenticar = async(req, res) => {
    const { email, password } = req.body
        //comprobar si existe el usuario
    const usuario = await User.findOne({ email })
    if (!usuario) {
        const error = new Error('El usuario no existe')
        return res.status(404).json({ msg: error.message })
    }
    //comprobar si el usuario esta confirmado
    if (!usuario.confirmado) {
        const error = new Error('Tu cuenta no ha sido confirmada')
        return res.status(403).json({ msg: error.message })
    }

    //comprobar su password
    if (await usuario.comprobarPassword(password)) {
        res.status(200).json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarjwt(usuario._id)
        })
    } else {
        const error = new Error('Datos Erroneos')
        return res.status(403).json({ msg: error.message })
    }

}

const confirmar = async(req, res) => {
    const { token } = req.params
    const usuarioConfirmar = await User.findOne({ token })
    if (!usuarioConfirmar) {
        const error = new Error('Token invalido')
        return res.status(403).json({ msg: error.message })
    }
    try {
        usuarioConfirmar.confirmado = true
        usuarioConfirmar.token = ''
        await usuarioConfirmar.save()
        return res.status(200).json({ msg: 'Usuario confirmado correctamente' })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const olvidePassword = async(req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        const error = new Error('El Email no se encuentra registrado')
        return res.status(404).json({ msg: error.message })
    }
    try {
        user.token = generarId()
        await user.save()
            //Enviamos el email

        emailOlvideRegistro({
            email: user.email,
            nombre: user.nombre,
            token: user.token
        })

        return res.status(200).json({ msg: 'Hemos enviado un email con las instrucciones' })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

const comprobarToken = async(req, res) => {
    const { token } = req.params
    const tokenValido = await User.findOne({ token })

    if (tokenValido) {
        res.json({ msg: 'token valido y existe el usuario' })
    } else {
        const error = new Error('Token invalido')
        res.status(403).json({ msg: error.message })
    }

}

const nuevoPassword = async(req, res) => {
    const { token } = req.params
    const { password } = req.body

    const usuario = await User.findOne({ token })

    if (usuario) {
        usuario.password = password
        usuario.token = ''
        try {
            await usuario.save()
            res.status(200).json({ msg: 'Password Modificado Correctamente' })
        } catch (error) {
            res.status(500).json({ msg: 'Hubo un error en el servidor' })
        }
    } else {
        const error = new Error('Token invalido')
        res.status(403).json({ msg: error.message })
    }
}

const perfil = async(req, res) => {
    const { user } = req
    res.json(user)
}


export { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil }