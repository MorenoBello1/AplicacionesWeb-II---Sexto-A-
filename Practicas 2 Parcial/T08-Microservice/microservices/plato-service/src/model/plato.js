//importacion de libreria
const mongoose=require("mongoose")
//creacion de entidades para el modelo 
const platoSchema=mongoose.Schema({
    descripcion:{
        type:String,
        required:true
    }
})
//creacion de la entidad plato para mongo 
module.exports=mongoose.model("Plato", platoSchema)