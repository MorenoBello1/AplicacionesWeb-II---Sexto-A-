//importaciones de librerias 
const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const appRoutes=require("./src/app")
//creaciones de rutas para ser usada 
const app=express()


app.use(express.json())
app.use("/api",appRoutes)
//uso de Api mediante la ruta de acceso 
app.get("/",(req, res)=>{
res.send("Welcome to my app")
})


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_CNN)
.then(()=>console.log("conectado a mongodb"))//conexion a mongo 
.catch((error)=>console.error(error))

//Escuchando en el puerto 1000 
app.listen(1000,(req,res)=>{
    console.log("listening on port 1000")
})