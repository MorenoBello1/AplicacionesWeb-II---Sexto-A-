//Elementos para llamar a las diferentes librerias path,express,cors.
const path = require("path");
const express = require("express");
const cors = require("cors");
//Creacion de una constante para asignar el puerto que vamos a usar como servidor local
//Instancias en las rutas con cada HTML, PLATO PACIENTE Y REGISTRO
const puerto = 8081;
const URLPaciente = path.join(__dirname,"./Paciente.html")
const URLPlato = path.join(__dirname,"./Plato.html")
const URLRegistro = path.join(__dirname,"./Registro.html")
//inicializamos EXPRESS(),y asignamos el json por defecto como pagina, e Asignacion de una pagina por defecto al acceder al servidor

const Server =  express();
Server.use(cors()).use(express.json());
Server.get('/', functionIndex );

//Creacion de solicitudes del tipo GET para buscar las paginas, PLATO,PACIENTE,REGISTRO

Server.get('/Plato', (req, res)=>{
    res.status(200).sendFile(URLPlato);
})
Server.get('/Paciente', (req, res)=>{
    res.status(200).sendFile(URLPaciente);
})
Server.get('/Registro', (req, res)=>{
    res.status(200).sendFile(URLRegistro);
})

//Creamos metodo para mostrar la pagina que se asigna mediante el url por defecto en este caso URLRegistro.
function functionIndex (req, res){
    res.status(200).sendFile(URLRegistro);
}
//Indicacion y entrada del puerto a mostrar. 
Server.listen(puerto, ()=>{
    console.log(`Servidor corriendo http://localhost:${puerto}`);
})




