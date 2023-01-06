const express=require("express")
const registroSchema=require("./modelo/registro")
const router=express.Router()
//importacion de librerias

//peticion get para extraer todo los datos
router.get("/registro",(req, res)=>{
    registroSchema.find()
    .then((data)=>res.send(data))
    .catch((error)=>res.send({message:error}))
})
//peticion post para guardar un registro 
router.post("/registro",(req,res)=>{
    const registro=registroSchema(req.body)
    registro.save()
    .then(()=>res.send("Registro creado con éxito"))
    .catch((error)=>res.send({message:error}))
})

//peticion get para extraer un solo dato 
router.get("/registro/:id", (req, res)=>{
const {id}=req.params
registroSchema.findById(id)
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})

//peticion put para modificiar un dato
router.put("/registro/:id",(req, res)=>{
const {id}=req.params
const {id_Paciente}=req.body
const {id_Plato}=req.body
const {fecha}=req.body
const {hora}=req.body
const {NumeroCaloriasConsumidas}=req.body
const {NumeroPorciones}=req.body
registroSchema.updateOne({_id: id}, {$set: {id_Paciente,id_Plato,fecha,hora,NumeroCaloriasConsumidas,NumeroPorciones}} )
.then((data)=>res.send(data))
.catch((error)=> res.send({message:error}))
})

//peticion delete para eliminar un dato.
router.delete("/registro/:id",(req, res)=>{
    const {id}=req.params
    registroSchema.deleteOne({_id:id})
    .then((data)=>res.send(data))
    .catch((error)=>res.send(error))
    })


module.exports=router