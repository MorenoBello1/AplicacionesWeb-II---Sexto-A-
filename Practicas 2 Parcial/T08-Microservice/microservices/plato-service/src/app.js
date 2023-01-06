//importaciones de librerias
const express=require("express")
const platoSchema=require("./model/plato")
const router=express.Router()


//peticion get para obtener los platos 
router.get("/platos",(req, res)=>{
    platoSchema.find()
    .then((data)=>res.send(data))
    .catch((error)=>res.send({message:error}))
})
//peticion post para crear un nuevo plato 
router.post("/platos",(req,res)=>{
    const plato=platoSchema(req.body)
    plato.save()
    .then(()=>res.send("plato creado con éxito"))
    .catch((error)=>res.send({message:error}))
})

//peticion get para obtener un solo dato de platos 
router.get("/platos/:id", (req, res)=>{
const {id}=req.params
platoSchema.findById(id)
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})

//peticion put para modificar un dato 
router.put("/platos/:id",(req, res)=>{
const {id}=req.params
const {descripcion}=req.body
platoSchema.updateOne({_id: id}, {$set: {descripcion}})
.then((data)=>res.send(data))
.catch((error)=> res.send({message:error}))
})

//peticion delete para eliminar un plato ingresado 
router.delete("/platos/:id",(req, res)=>{
    const {id}=req.params
    platoSchema.deleteOne({_id:id})
    .then((data)=>res.send(data))
    .catch((error)=>res.send(error))
    })


module.exports=router