//importacions  de librerias 
const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()//permitir usar .env
const appRoutes=require("./src/Controlador")
const cors = require("cors")//permitir el intercambio de recursos.

const app=express()
//Uso de express y creacion de rama del backend donde se encuentras las peticiones de la entidad transaccional
app.use(cors())
app.use(express.json())
app.use("/api",appRoutes)

app.get("/",(req, res)=>{
res.send("Welcome to my app")
})


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_CNN)//linea de codigo para variable de entorno
.then(()=>console.log("Conexion exitosa, conectada a MONGO ATLAS"))
.catch((error)=>console.error(error))


app.listen(2000,(req,res)=>{
    console.log("Conectado al Puerto 2000")
})