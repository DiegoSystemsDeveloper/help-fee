import mongoose from 'mongoose'

const portfolioPurchaseSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    entidad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entitie"
    }
}, {
    timestamps: true
})

const PortfolioPurchase = mongoose.model("PortfolioPurchase", portfolioPurchaseSchema)

export default PortfolioPurchase