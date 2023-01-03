
const express=require("express")
const platoSchema=require("./model/plato")
const router=express.Router()



router.get("/platos",(req, res)=>{
    platoSchema.find()
    .then((data)=>res.send(data))
    .catch((error)=>res.send({message:error}))
})

router.post("/platos",(req,res)=>{
    const plato=platoSchema(req.body)
    plato.save()
    .then(()=>res.send("plato creado con éxito"))
    .catch((error)=>res.send({message:error}))
})


router.get("/platos/:id", (req, res)=>{
const {id}=req.params
platoSchema.findById(id)
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})


router.put("/platos/:id",(req, res)=>{
const {id}=req.params
const {descripcion}=req.body
platoSchema.updateOne({_id: id}, {$set: {descripcion}})
.then((data)=>res.send(data))
.catch((error)=> res.send({message:error}))
})


router.delete("/platos/:id",(req, res)=>{
    const {id}=req.params
    platoSchema.deleteOne({_id:id})
    .then((data)=>res.send(data))
    .catch((error)=>res.send(error))
    })


module.exports=router