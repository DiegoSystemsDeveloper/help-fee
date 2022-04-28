import mongoose from "mongoose";

const revolvingCreditSchema = new mongoose.Schema({
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
    }
}, {
    timestamps: true
})