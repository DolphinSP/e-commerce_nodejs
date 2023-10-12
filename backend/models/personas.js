import mongoose from "mongoose";


const esquemaPersona = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    access: {
        type: Boolean,
        default: false,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    }

},
    { versionKey: false });

export default mongoose.model("personas", esquemaPersona);