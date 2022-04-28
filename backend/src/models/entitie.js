import mongoose from "mongoose";

const entitieSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        trim: true,
        required: true
    },
    nit: {
        type: String,
        trim: true,
        required: true
    }
})
const Entitie = mongoose.model('Entitie', entitieSchema)

export default Entitie