//Creaciones de los array para los respectivos Objetos:Plato, Cliente, Registro.
var Plato =[

    {  id_Plato:1, Nombre_de_Plato:"Crema de verdura"},  
    {  id_Plato:2, Nombre_de_Plato:"Crema de Queso"},
    {  id_Plato:3, Nombre_de_Plato:"Camaron Apanado" },
    {  id_Plato:4, Nombre_de_Plato:"Arroz blanco"},
    {  id_Plato:5, Nombre_de_Plato:"Frutas"}

];

//Se añadirieron 2 atributos que se creen necesarios "Edad y  Altura" 
var Paciente =[

    {   id_Paciente:1, Nombre:"Jose", Identificacion:"1314845791",Edad:21, Altura:1.78},      
    {   id_Paciente:2, Nombre:"Andres", Identificacion:"1312745721",Edad:21, Altura:1.82},
    {   id_Paciente:3, Nombre:"Juliana", Identificacion:"1315845721",Edad:21, Altura:1.81},
    {   id_Paciente:4, Nombre:"Majo", Identificacion:"1312835211",Edad:21, Altura:1.78},
    {   id_Paciente:5, Nombre:"Carla", Identificacion:"1315841741",Edad:21, Altura:1.63}
];

const Fecha_Hoy= new Date()

var Registro =[
//incorporamos las relaciones de Id.
    {   id_Registro:1, id_Paciente:1, id_Plato:1, fecha:Fecha_Hoy, hora:"12:33", Numero_Calorias_Consumidas:"20", Numero_Porciones:"3"},      
    {   id_Registro:2, id_Paciente:2, id_Plato:2, fecha:"22-08-2002", hora:"22:33", Numero_Calorias_Consumidas:"28", Numero_Porciones:"3"},
    {   id_Registro:3, id_Paciente:3, id_Plato:3, fecha:"12-04-2002", hora:"08:12", Numero_CaloriasConsumidas:"12", Numero_Porciones:"3"},
    {   id_Registro:4, id_Paciente:4, id_Plato:4, fecha:Fecha_Hoy, hora:"21:19", Numero_Calorias_Consumidas:"32", Numero_Porciones:"3"},
    {   id_Registro:5, id_Paciente:5, id_Plato:5, fecha:"22/08/2005", hora:"2:01", Numero_Calorias_Consumidas:"2", Numero_Porciones:"3"}
];

// Y utilizacion de .length para la distancia de los array de registro y Plato.
let conteo=0;
while (conteo<Plato.length){

    console.log(Plato[conteo]);
    conteo++;

}

//bucle para mostrar los datos del registro mediante una variable "i" que sera su aumento
for (let i=0; i<Registro.length;i++){
    console.log(Registro[i]);
}

//Uso de un forEach que apartir de el elemento "AtributoActual" hacemos el llamado de cada uno de las propiedades dentro del array cliente."
Paciente.forEach(Atributo_Actual => console.log('\nId del Cliente: ' +Atributo_Actual.id_Paciente +'   -Nombre del Cliente: '+Atributo_Actual.Nombre
+'   Numero de identificacion: '+Atributo_Actual.Identificacion+ '    Con una edad de: '+Atributo_Actual.Edad+'    Y Altura de :  '+Atributo_Actual.Altura));

 
  