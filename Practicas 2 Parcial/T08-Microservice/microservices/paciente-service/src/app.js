
const pacienteSchema=require("./model/paciente")
const express=require("express")
const router=express.Router()

router.get("/paciente",(req, res)=>{
    pacienteSchema.find()
    .then((data)=>res.send(data))
    .catch((error)=>res.send({message:error}))
})


router.post("/paciente", (req, res)=>{
const paciente=pacienteSchema(req.body)
paciente.save()
.then((data)=> res.send(data))
.catch((error)=>res.send({message:error}))
})


router.get("/paciente/:id",(req, res)=>{
const {id}=req.params
pacienteSchema.findById(id)
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})


router.put("/paciente/:id",(req, res)=>{
const {id}=req.params
const {nombre, identificacion, edad, altura}=req.body
pacienteSchema.updateOne({_id:id}, {$set: {nombre, identificacion, edad, altura}})
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})



router.delete("/paciente/:id",(req, res)=>{
const {id}=req.params
pacienteSchema.deleteOne({_id:id})
.then((data)=>res.send(data))
.catch((error)=>res.send(error))
})

module.exports=router