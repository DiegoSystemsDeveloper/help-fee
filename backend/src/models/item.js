import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    estado: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const Item = mongoose.model('Item', itemSchema)

export default Item