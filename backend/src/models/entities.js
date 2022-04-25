import mongoose from "mongoose";

const entities = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    }
})

export default entities