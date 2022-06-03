import Item from "../models/item.js";

const registrarItem = async(req, res) => {
    try {
        const item = new Item(req.body)
        const itemAlmacenado = await item.save()
        console.log(itemAlmacenado)
        res.status(200).json(itemAlmacenado)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const obtenerItem = async(req, res) => {
    const { usuario } = req.params
    const items = await Item.find({ usuario })
    console.log(items)
    res.status(200).json(items)
}


const obtenerItems = async(req, res) => {
    const { id } = req.params
    const item = await Item.find({ usuario: id })
    if (!item) {
        const error = new Error('El item no existe')
        res.status(404).json(error.message)
        return
    }
    res.status(200).json(item)
}

export { registrarItem, obtenerItems, obtenerItem }