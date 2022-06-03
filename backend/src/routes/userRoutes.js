import express from 'express'
import { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil, actualizarTelefono } from '../controllers/userController.js'
import isAuth from '../middleware/isAuth.js'
const router = express.Router()

//Registro, Autenticacion y confirmacion de usuarios
router.post('/', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)
router.post('/olvide-password', olvidePassword)
router.put('/actualizar/:id', actualizarTelefono)
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)
router.get('/perfil', isAuth, perfil)

export default router