import mongoose from "mongoose";


const esquemaProducto = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    image: {
        url: String,
        public_id: String
    },
    stock: {
        type: String,
        required: true,
        trim: true
    }
},
    { versionKey: false });

export default mongoose.model("productos", esquemaProducto);