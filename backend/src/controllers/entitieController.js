import Entitie from "../models/entitie.js"

const obtenerEntidades = async(req, res) => {
    const entities = await Entitie.find()
    console.log(req.user)
    res.json(entities)
}

const registrarEntidad = async(req, res) => {
    console.log(req.user)
    const { nit } = req.body
    const existeEntidad = await Entitie.findOne({ nit })
    console.log(existeEntidad)
    if (existeEntidad) {
        const error = new Error('Entidad ya registrada')
        return res.status(400).json({ msg: error.message })
    }
    try {
        const entidad = new Entitie(req.body)
        const entidadAlmacenada = await entidad.save()
        console.log(entidadAlmacenada)
        res.status(200).json(entidadAlmacenada)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const obtenerEntidad = async(req, res) => {
    const {id} = req.params
    const entidad = Entitie.findById({id})

    if(!entidad) {
        const error = new Error('Registro no encontrado')
        return res.status(404).json({msg: error.message})
    }
    res.status(200).json(entidad)
}

const obtenerEntidadesFiltradas = async(req, res) => {

}

export {
    obtenerEntidades,
    obtenerEntidad,
    obtenerEntidadesFiltradas,
    registrarEntidad
}