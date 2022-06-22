import mongoose from "mongoose";

const creditCardSchema = new mongoose.Schema({
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
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    cupoMinimo: {
        type: Number,
        required: true,
        trim: true
    },
    cupoMaximo: {
        type: Number,
        required: true,
        trim: true
    },
    interesMensual: {
        type: Number,
        required: true,
        trim: true
    },
    interesAnual: {
        type: Number,
        required: true,
        trim: true
    },
    entidad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entitie"
    },
    plazoMinimo: {
        type: Number,
        required: true,
        trim: true
    },
    plazoMaximo: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const CreditCard = mongoose.model('CreditCard', creditCardSchema)

export default CreditCard