import Productos from "../models/productos.js";
import { cargarImagen, eliminarImagen } from "../libraries/cloudinary.js";
import fs from "fs-extra";



export const getAdministrador = (req, res) => {

    const leer = Productos.find().then((lectura) => {
        res.json(lectura)
    }).catch((error) => { res.status(500).json("Error: " + error.menssage) })
}

export const postAdministrador = async (req, res) => {
    const { name, description, price, stock } = req.body;
    
    let image = null

    
    
    if (req.files.image) {

        
        const imagenCargada = await cargarImagen(req.files.image.tempFilePath)
        
        image = {url: imagenCargada.secure_url, public_id: imagenCargada.public_id}
        
        fs.remove(req.files.image.tempFilePath)
        
    }
    

    const escritura = new Productos({ name, description, price, image, stock })
    escritura.save().then((promesa) => { res.json(promesa) }).catch((error) => { res.status(500).json("Error: " + error.menssage) })
}

export const putAdministrador = (req, res) => {
    Productos.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((modificar) => {
        res.json(modificar)
    }).catch((error) => { res.status(500).json("Error: " + error.menssage) })
}

export const deleteAdministrador = (req, res) => {
    Productos.findByIdAndDelete(req.params.id).then((promesa) => {

        if (!promesa) return res.send("el producto a eliminar esta ausente")


            if(promesa.image.public_id){

                eliminarImagen(promesa.image.public_id)

            }
            
            return res.send("producto eliminado con exito")



    }).catch((error) => { res.status(500).json("Error: " + error.menssage) })


}

export const getPuntualAdministrador = (req, res) => {
    Productos.findById(req.params.id).then((promesa) => {

        if(!promesa){

            res.send("el producto a buscar esta ausente")

        }
        else{

            res.json(promesa)

        }
            
        
    }).catch((error) => { res.status(500).json("Error: " + error.menssage) })

}



