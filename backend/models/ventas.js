import mongoose from "mongoose";


const esquemaVenta = new mongoose.Schema({

cliente: {
    type: String,
    required: true,
    trim: true
},
fecha: {
    type: Date,
    required: true,
    trim: true
},
elementos: [{
    type: mongoose.Schema.ObjectId,
    ref: "productos"
}],
total:{
type: Number,
default: 0,
required: true,
trim: true

}
}, 
{versionKey: false});


export default mongoose.model("ventas", esquemaVenta);