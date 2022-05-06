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

export { registrarCreditCard, obtenerCreditCards }