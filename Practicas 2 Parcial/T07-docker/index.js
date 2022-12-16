//Nombre: Polanco Briones Alex Javier 
//Curso: 6"B"
//Tema: Practica 1 Segundo Parcial 

//Url conexcion mongo: mongodb+srv://AlexPolanco:alex0906@cluster0.rfywjkj.mongodb.net/test
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const app = express();
const PUERTO =  process.env.PORT || 5000;
const userRoutes = require("./rutas");

app.use(express.json());
app.use('/api', userRoutes);

app.get("/", (req, res) =>{
    res.send("Practica 1 Segundo Parcial ");
})

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log('Conectado con exito a Mongo'))
.catch((error)=> console.log(error))

app.listen(PUERTO,()=>{
    console.log(`Servidor corriendo, accede a http:localhost:${PUERTO}`);
})