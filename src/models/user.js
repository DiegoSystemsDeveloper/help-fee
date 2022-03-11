const moongose = require('mongoose')
const { Schema } = moongose
const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
    correo: String,
    password: String,
    nombres: String
})

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = moongose.model('users', userSchema)