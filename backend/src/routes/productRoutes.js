import express from 'express'
import { obtenerCreditCards, registrarCreditCard } from '../controllers/creditCardController.js'
const router = express.Router()

router.post('/tarjeta-de-credito', registrarCreditCard)
router.get('/tarjeta-de-credito', obtenerCreditCards)

export default router