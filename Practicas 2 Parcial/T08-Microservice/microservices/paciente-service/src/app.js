
const pacienteSchema=require("./model/paciente")
const express=require("express")
const router=express.Router()
//importaciones de librerias 
//peticion get
router.get("/paciente",(req, res)=>{
    pacienteSchema.find()
    .then((data)=>res.send(data))
    .catch((error)=>res.send({message:error}))
})

//peticion post
router.post("/paciente", (req, res)=>{
const paciente=pacienteSchema(req.body)
paciente.save()
.then((data)=> res.send(data))
.catch((error)=>res.send({message:error}))
})

//peticion get a un solo dato
router.get("/paciente/:id",(req, res)=>{
const {id}=req.params
pacienteSchema.findById(id)
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})

//peticion put para modificar 
router.put("/paciente/:id",(req, res)=>{
const {id}=req.params
const {nombre, identificacion, edad, altura}=req.body
pacienteSchema.updateOne({_id:id}, {$set: {nombre, identificacion, edad, altura}})
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})


//peticion delete para eliminar un paciente 
router.delete("/paciente/:id",(req, res)=>{
const {id}=req.params
pacienteSchema.deleteOne({_id:id})
.then((data)=>res.send(data))
.catch((error)=>res.send(error))
})

module.exports=router