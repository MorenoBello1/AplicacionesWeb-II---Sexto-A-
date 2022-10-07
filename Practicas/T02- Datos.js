var Plato =[

    {  id_Plato:1, Nombre_de_Plato:"Crema de verdura"},  
    {  id_Plato:2, Nombre_de_Plato:"Crema de Queso"},
    {  id_Plato:3, Nombre_de_Plato:"Camaron Apanado" },
    {  id_Plato:4, Nombre_de_Plato:"Arroz blanco"},
    {  id_Plato:5, Nombre_de_Plato:"Frutas y leche"},

];
var Registro =[
    //incorporamos las relaciones de Id.
        {   id_Registro:1, id_Plato:1, fecha:"02-07-2010", hora:"12:33", Numero_Calorias_Consumidas:20, Numero_Porciones:2},      
        {   id_Registro:2, id_Plato:2, fecha:"22-08-2002", hora:"22:33", Numero_Calorias_Consumidas:23, Numero_Porciones:3},
        {   id_Registro:3, id_Plato:3, fecha:"12-04-2002", hora:"08:12", Numero_Calorias_Consumidas:12, Numero_Porciones:1},
        {   id_Registro:4, id_Plato:4, fecha:"24-12-2022", hora:"21:19", Numero_Calorias_Consumidas:32, Numero_Porciones:30},

        {   id_Registro:5, id_Plato:5, fecha:"12-08-1999", hora:"2:01", Numero_Calorias_Consumidas:2, Numero_Porciones:2},
        {   id_Registro:6, id_Plato:1, fecha:"12-08-1999", hora:"2:01", Numero_Calorias_Consumidas:2, Numero_Porciones:2}

    ];
    module.exports.Plato = Plato
    module.exports.Registro = Registro

 
