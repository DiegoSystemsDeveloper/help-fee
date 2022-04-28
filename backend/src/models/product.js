import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    productos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CreditCard"
    }, {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FreeCredit"
    }, {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PortfolioPurchase"
    }, {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RevolvingCredit"
    }]
})

const Product = mongoose.model("Product", productSchema)

export default Product