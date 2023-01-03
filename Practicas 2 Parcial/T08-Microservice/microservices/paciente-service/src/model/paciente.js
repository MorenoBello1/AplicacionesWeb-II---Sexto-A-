
const mongoose=require("mongoose")

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

module.exports=mongoose.model("Paciente", pacienteSchema)