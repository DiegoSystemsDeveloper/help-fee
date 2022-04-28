import mongoose from 'mongoose'

const freeCreditSchema = new mongoose.Schema({
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
    tasaFija: {
        type: Number,
        required: true,
        trim: true
    },
    tasaVariable: {
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

const FreeCredit = mongoose.model('FreeCredit', freeCreditSchema)

export default FreeCredit