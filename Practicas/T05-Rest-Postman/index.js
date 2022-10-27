//uso de constantes para hacer uso de las respectivas librerias 
const cors = require("cors");
const express = require("express");

//Inicializacion de la aplicacion EXPRESS y asignacion del numero de puerto  en una varible
const Server = express();
const puerto =  8081;
//Llamada a una estructura JSON de express para manejar rutas
Server.use(cors()).use(express.json());
Server.use('/public', express.static(__dirname+'/public'));
//Definimos Arreglo donde se instanciaran o guardaran los datos
let Pacientes = [];
//metodo get para mostrar datos.
Server.get('/', (req, res)=>{
    res.status(200).send(
        //Muestra todo los elementos del arreglo
        Pacientes
    )
})
//metodo post para insertar datos.
Server.post('/', (req,res)=>{
    const {body} = req;
    //Ingreso de datos al arreglo
    Pacientes.push(body);
    res.status(200).send({
        message:"Dato insertado Correctamente.",
        response:body
    })
})
//metodo put para modificar los datos 
Server.put('/', (req,res)=>{
    //Constant con cada uno de los atributos de la entidad
    const {id_Paciente, nombre, identificacion, edad, altura}= req.body;
    //Comprobacion si existe la identidad de paciente
    let Paciente = Pacientes.filter(p=> p.id_Paciente === id_Paciente)[0];
    //muestra datos entrante en la consola a medida que existen cambios
    console.log(Paciente); 
    //Asignacion de las variables que seran reemplazadas mediante el metodo de envio de put
    Paciente.nombre = nombre; 
    Paciente.identificacion = identificacion;
    Paciente.edad = edad;
    Paciente.altura = altura;
    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response:Paciente
        }
    )
})
//metodo delete para poder eliminar un dato mediante la id_paciente
Server.delete('/:id_Paciente', (req, res)=>{
    //recoge la id del dato.
    const {id_Paciente} = req.params;
    //comprobacion de que el dato exista, si existe  se reasigna la misma variable pero sin el dato que se encontro.
    Pacientes = Pacientes.filter(p => p.id_Paciente != id_Paciente);
    res.status(200).send({
        response:"Se elimino el resultado el auto con éxito"
    })
})
//server escuchando mediante el puerto que se ubico anteriormente.
Server.listen(puerto,()=>{
    console.log(`Servidor corriendo, accede a http:localhost:${puerto}`);
})