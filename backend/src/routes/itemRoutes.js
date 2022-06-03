import express from 'express'
import { registrarItem, obtenerItems, obtenerItem } from '../controllers/itemController.js'
const router = express.Router()

router.post('/item', registrarItem)
router.get('/:id', obtenerItems)
router.get('/item/:usuario', obtenerItem)

export default router