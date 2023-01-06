//importacion de libreria 
const mongoose=require("mongoose")
//creacion de atributos para el modelo 
const pacienteSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    identificacion:{
        type:String,
        required:true
    },
    edad:{
        type:String,
        required:true
    },
    altura:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Paciente", pacienteSchema)//creacion de modelo de paciente en la base de datos y exportandolo