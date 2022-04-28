import mongoose from "mongoose";

const creditCard = new mongoose.Schema({
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
    }
}, {
    timestamps: true
})

const CreditTarget = mongoose.model('CreditTarget', creditCard)

export default CreditTarget