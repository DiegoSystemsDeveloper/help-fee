import User from "../models/user.js"
import generarId from '../helpers/generarId.js'
import generarjwt from '../helpers/generarjwt.js'

const registrar = async(req, res) => {
    //evitar registros duplicados
    const { email } = req.body
    const existeUsuario = await User.findOne({ email })

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({ msg: error.message })
    }

    try {
        const user = new User(req.body)
        user.token = generarId()
        const userAlmacenado = await user.save()
        res.json(userAlmacenado)
    } catch (error) {
        console.log(error)
    }
}

const autenticar = async(req, res) => {
    const { email, password } = req.body
        //comprobar si existe el usuario
    const usuario = await User.findOne({ email })
    if (!usuario) {
        const error = new Error('El usuario no existe')
        return res.status(404).json({ error: error.message })
    }
    //comprobar si el usuario esta confirmado
    if (!usuario.confirmado) {
        const error = new Error('Tu cuenta no ha sido confirmada')
        return res.status(403).json({ error: error.message })
    }

    //comprobar su password
    if (await usuario.comprobarPassword(password)) {
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarjwt(usuario._id)
        })
    } else {
        const error = new Error('Tu cuenta no ha sido confirmada')
        return res.status(403).json({ error: error.message })
    }

}

const confirmar = async(req, res) => {
    const { token } = req.params
    const usuarioConfirmar = await User.findOne({ token })
    if (!usuarioConfirmar) {
        const error = new Error('Token invalido')
        res.status(403).json({ msg: error.message })
    }
    try {
        usuarioConfirmar.confirmado = true
        usuarioConfirmar.token = ''
        await usuarioConfirmar.save()
        res.json({ msg: 'Usuario confirmado correctamente' })
        console.log(usuarioConfirmar)
    } catch (error) {
        console.log(error)
    }
}

const olvidePassword = async(req, res) => {
    const { email } = req.body
    const usuario = await User.findOne({ email })
    if (!usuario) {
        const error = new Error('El usuario no existe')
        return res.status(404).json({ error: error.message })
    }
    try {
        usuario.token = generarId()
        await usuario.save()
        res.json({ msg: 'Hemos enviado un email con las instrucciones' })
    } catch (error) {

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
            res.json({ msg: 'Password Modificado Correctamente' })
        } catch (error) {
            console.log(error)
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