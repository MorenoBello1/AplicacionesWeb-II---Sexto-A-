const mongoose=require("mongoose")
//importacion de libreria 

const registroSchema=mongoose.Schema({//atributos de la entidad transaccional 
    id_Paciente:{
        type:String,
        required:true
    },
    id_Plato:{
        type:String,
        required:true
    },
    fecha:{
        type:String,
        required:true
    },
    hora:{
        type:String,
        required:true
    },
    NumeroCaloriasConsumidas:{
        type:String,
        required:true
    },
    NumeroPorciones:{
        type:String,
        required:true
    }
    
})

module.exports=mongoose.model("Registro", registroSchema)//creacion en la base de datos con su nombre . exportandolo