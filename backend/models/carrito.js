import mongoose from "mongoose";


const esquemaCarrito = new mongoose.Schema({

name: {
    type: String,
    required: true,
    trim: true
},
email: {
    type: String, 
    required: true, 
    trim: true
},
cedula: {
    type: Number, 
    required: true, 
    trim: true
},
fecha: {
    type: Date,
    required: true,
    trim: true
},
productos: Array,
carrito: Array,
total:{
type: Number,
default: 0,
required: true,
trim: true

}
}, 
{versionKey: false});


export default mongoose.model("carrito", esquemaCarrito);