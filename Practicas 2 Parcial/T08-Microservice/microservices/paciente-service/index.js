
const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const pacienteRoutes=require("./src/app")
//rutas y importaciones 
const app=express()

app.use(express.json())
//ruta para las peticiones API
app.use("/api", pacienteRoutes)



app.get("/", (req, res)=>{
    res.send("welcome to my app")
})
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI)//conexion a mongoDB community
.then(()=>console.log("conectado a mongodb"))
.catch((error)=>console.log(error))

//Instanciado o escuchando en el puerto 1000
app.listen(1000,()=>{
    console.log("listening on port 1000")
})