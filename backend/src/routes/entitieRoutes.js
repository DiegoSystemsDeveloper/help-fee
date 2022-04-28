import express from "express";
import isAuth from "../middleware/isAuth.js";
import { obtenerEntidad, obtenerEntidades, obtenerEntidadesFiltradas, registrarEntidad } from "../controllers/entitieController.js"
const router = express.Router()

router.post('/', registrarEntidad)
router.get('/', isAuth, obtenerEntidades)
router.get('/:id', isAuth, obtenerEntidad)
    //router.get('/:filtro', isAuth, obtenerEntidadesFiltradas)

export default router