
const mongoose=require("mongoose")

const platoSchema=mongoose.Schema({
    descripcion:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Plato", platoSchema)