const passport = require('passport')
const Strategy = require('passport-local/lib')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/user')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async(id, done) => {
    const user = await User.findById(id)
    done(null, user)
})

passport.use('local-registro', new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, email, password, done) => {

    const user = await User.findOne({ correo: email })
    if (user) {
        return done(null, false, req.flash('mensajeRegistro', 'El correo ya existe.'))
    } else {
        console.log(req.body.password == req.body.passwordconfirmar)
        if (password.length <= 1 || req.body.nombres.length <= 1 ||
            req.body.passwordconfirmar <= 1 || email.length <= 1) {
            return done(null, false, req.flash('mensajeRegistro', 'Porfavor Revise los campos.'))
        }
        if (!(req.body.password == req.body.passwordconfirmar)) {
            return done(null, false, req.flash('mensajeRegistro', 'Confirmacion de contrasena incorrecta.'))
        }
        const newUser = new User()
        newUser.correo = email
        newUser.password = newUser.encryptPassword(password)
        newUser.nombres = req.body.nombres
        await newUser.save()
        done(null, newUser)
    }

}))

passport.use('local-login', new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, correo, password, done) => {
    const user = await User.findOne({ correo: correo })
    if (!user) {
        return done(null, false, req.flash('mensajeLogin', 'Usuario no encontrado'))
    }
    if (!user.comparePassword(password)) {
        done(null, false, req.flash('mensajeLogin', 'Contrasena incorrecta.'))
    }
    done(null, user)
}))