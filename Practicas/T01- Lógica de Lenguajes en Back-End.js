//Creaciones de los array para los respectivos Objetos:Plato, Cliente, Registro.
var Plato =[

    {  idPlato:1, Nombre_de_Plato:"Crema de verdura"},      
    {  idPlato:2, Nombre_de_Plato:"Crema de Queso"},
    {  idPlato:3, Nombre_de_Plato:"Camaron Apanado" },
    {  idPlato:4, Nombre_de_Plato:"Arroz blanco"},
    {  idPlato:5, Nombre_de_Plato:"Frutas"}
];

//Se añadirieron 2 atributos que se creen necesarios "Edad y  Altura" 
var Paciente =[

    {   idPaciente:1, Nombre:"Jose", Identificacion:"1314845791",Edad:21, Altura:1.78},      
    {   idPaciente:2, Nombre:"Andres", Identificacion:"1312745721",Edad:21, Altura:1.82},
    {   idPaciente:3, Nombre:"Juliana", Identificacion:"1315845721",Edad:21, Altura:1.81},
    {   idPaciente:4, Nombre:"Majo", Identificacion:"1312835211",Edad:21, Altura:1.78},
    {   idPaciente:5, Nombre:"Carla", Identificacion:"1315841741",Edad:21, Altura:1.63}
];

const Fecha_Hoy= new Date()

var Registro =[
//incorporamos las relaciones de Id.
    {   idRegistro:1, idPaciente:1, idPlato:1, fecha:Fecha_Hoy, hora:"12:33", NumeroCaloriasConsumidas:"20", NumeroPorciones:"3"},      
    {   idRegistro:2, idPaciente:2, idPlato:2, fecha:"22-08-2002", hora:"22:33", NumeroCaloriasConsumidas:"28", NumeroPorciones:"3"},
    {   idRegistro:3, idPaciente:3, idPlato:3, fecha:"12-04-2002", hora:"08:12", NumeroCaloriasConsumidas:"12", NumeroPorciones:"3"},
    {   idRegistro:4, idPaciente:4, idPlato:4, fecha:Fecha_Hoy, hora:"21:19", NumeroCaloriasConsumidas:"32", NumeroPorciones:"3"},
    {   idRegistro:5, idPaciente:5, idPlato:5, fecha:"22/08/2005", hora:"2:01", NumeroCaloriasConsumidas:"2", NumeroPorciones:"3"}
];

// Y utilizacion de .length para la distancia de los array de registro y Plato.
let conteo=0;
while (conteo<Plato.length){

    conteo++;
    console.log(Plato[conteo]);
}

//bucle para mostrar los datos del registro mediante una variable "i" que sera su aumento
for (let i=0; i<Registro.length;i++){
    console.log(Registro[i]);
}

//Uso de un forEach que apartir de el elemento "AtributoActual" hacemos el llamado de cada uno de las propiedades dentro del array cliente."
Paciente.forEach(AtributoActual => console.log('\nId del Cliente: ' +AtributoActual.idPaciente +'   -Nombre del Cliente: '+AtributoActual.Nombre
+'   Numero de identificacion: '+AtributoActual.Identificacion+ '    Con una edad de: '+AtributoActual.Edad+'    Y Altura de :  '+AtributoActual.Altura));

 
  