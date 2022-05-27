import CreditCard from "../models/products/creditCard.js";

const registrarCreditCard = async(req, res) => {
    try {
        const creditCard = new CreditCard(req.body)
        const creditCardAlmacenada = await creditCard.save()
        console.log(creditCardAlmacenada)
        res.status(200).json(creditCardAlmacenada)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const obtenerCreditCards = async(req, res) => {
    const creditCards = await CreditCard.find()
    console.log(creditCards)
    res.status(200).json(creditCards)
}


const obtenerCreditCard = async(req, res) => {
    const { id } = req.params
    const creditCard = await CreditCard.findById(id)
    if (!creditCard) {
        const error = new Error('El producto no existe')
        res.status(404).json(error.message)
        return
    }
    res.status(200).json(creditCard)
}

export { registrarCreditCard, obtenerCreditCards, obtenerCreditCard }