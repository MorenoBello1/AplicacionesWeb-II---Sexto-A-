//Creaciones de los array para los respectivos Objetos:Plato, Cliente, Registro.
var Plato =[

    {  id_Plato:1, Nombre_de_Plato:"Crema de verdura"},  
    {  id_Plato:2, Nombre_de_Plato:"Crema de Queso"},
    {  id_Plato:3, Nombre_de_Plato:"Camaron Apanado" },
    {  id_Plato:4, Nombre_de_Plato:"Arroz blanco"},
    {  id_Plato:5, Nombre_de_Plato:"Frutas y leche"}

];

//Se añadirieron 2 atributos que se creen necesarios "Edad y  Altura" 
var Paciente =[

    {   id_Paciente:1, Nombre:"Jose", Identificacion:"1314845791",Edad:21, Altura:1.78},      
    {   id_Paciente:2, Nombre:"Andres", Identificacion:"1312745721",Edad:21, Altura:1.82},
    {   id_Paciente:3, Nombre:"Juliana", Identificacion:"1315845721",Edad:21, Altura:1.81},
    {   id_Paciente:4, Nombre:"Majo", Identificacion:"1312835211",Edad:21, Altura:1.78},
    {   id_Paciente:5, Nombre:"Carla", Identificacion:"1315841741",Edad:21, Altura:1.63}
];


var Registro =[
//incorporamos las relaciones de Id.
    {   id_Registro:1, id_Paciente:1, id_Plato:1, fecha:"02-07-2010", hora:"12:33", Numero_Calorias_Consumidas:20, Numero_Porciones:2},      
    {   id_Registro:2, id_Paciente:2, id_Plato:2, fecha:"22-08-2002", hora:"22:33", Numero_Calorias_Consumidas:23, Numero_Porciones:3},
    {   id_Registro:3, id_Paciente:3, id_Plato:3, fecha:"12-04-2002", hora:"08:12", Numero_Calorias_Consumidas:12, Numero_Porciones:1},
    {   id_Registro:4, id_Paciente:4, id_Plato:4, fecha:"24-12-2022", hora:"21:19", Numero_Calorias_Consumidas:32, Numero_Porciones:30},
    {   id_Registro:5, id_Paciente:5, id_Plato:5, fecha:"12-08-1999", hora:"2:01", Numero_Calorias_Consumidas:2, Numero_Porciones:2}
];

// Y utilizacion de .length para la distancia de los array de ambos caso tanto para registro y Plato.
let conteo=0;
console.log('\n\n PLATO');
while (conteo<Plato.length){

    console.log("ID del Plato : "+Plato[conteo].id_Plato+"  Nombre del Plato: "+Plato[conteo].Nombre_de_Plato);
    conteo++;

}

console.log('\n\n REGISTRO');
for (let i=0; i<Registro.length;i++){
    console.log('Id Registro: '+Registro[i].id_Registro+ '  Id del paciente:  '+Registro[i].id_Paciente +'  Id del Plato:  '+Registro[i].id_Plato +
    '  su Fecha:  '+Registro[i].fecha + '  Hora:  '+Registro[i].hora+'   Numero de calorias consumidas:  ' +Registro[i].Numero_Calorias_Consumidas+
    "  Numeros Porciones: "+Registro[i].Numero_Porciones);
}
console.log('\n\n CLiENTE');

//Uso de un forEach que apartir de el elemento "AtributoActual" hacemos el llamado de cada uno de las propiedades dentro del array cliente."
Paciente.forEach(Atributo_Actual => console.log('Id del Cliente: ' +Atributo_Actual.id_Paciente +'   Nombre del Cliente: '+Atributo_Actual.Nombre
+'    Numero de identificacion: '+Atributo_Actual.Identificacion+ '      Con una edad de: '+Atributo_Actual.Edad+'      Y Altura de :  '+Atributo_Actual.Altura+'Kg'));

 
  