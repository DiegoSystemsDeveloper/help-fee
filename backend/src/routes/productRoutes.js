import express from 'express'
import { obtenerCreditCards, registrarCreditCard, obtenerCreditCard } from '../controllers/creditCardController.js'
const router = express.Router()

router.post('/tarjeta-de-credito', registrarCreditCard)
router.get('/tarjeta-de-credito', obtenerCreditCards)
router.get('/tarjeta-de-credito/:id', obtenerCreditCard)

export default router