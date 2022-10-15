
const mongoose = require('mongoose');
const connectionURL= 'mongodb+srv://Moreno:105822moreno@atlascluster.nncabhx.mongodb.net/test';
( async ()=>{

try {

    //conectarse a la base de datos
    const stateConnection = await mongoose.connect(connectionURL);
    //creaciones de los modeloes "Plato, Paciente y Registro con sus respectivos atributos."
    const Plato = mongoose.model('Plato',{Nombre_de_Plato:String});

    const Paciente = mongoose.model('Paciente',{Nombre:String,Identificacion:String,Edad:Number,Altura:Number});

    const Registro = mongoose.model("Registro", 
    {
        //Aplicando relaciones de sus respectivos modelos apartir de sus Id.
        Id_Plato:{ type: mongoose.Types.ObjectId , ref:"Plato" },
        Id_Paciente: { type: mongoose.Types.ObjectId , ref:"Paciente" },
        Fecha:String,
        Hora:String,
        Numero_De_Calorias:Number,
        Numero_Porciones:Number
    });   
    
    //Ingreso de los datos, A el modelo Plato, Paciente, y Registro
    /*const plato_1 =  new Plato({Nombre_de_Plato:"Harina "});
    const Guardar_Plato = await  plato_1.save();

    const paciente_1 = new Paciente({Nombre:"Carla",Identificacion:"131245191",Edad:18,Altura:160});
    const Guardar_Paciente = await  paciente_1.save();

    const registro_1 = new Registro({
        Id_Plato: Guardar_Plato.Id_Plato,
        Id_Paciente: Guardar_Paciente.Id_Paciente,
        Fecha:"12/12/2022",
        Hora:"3:12",
        Numero_De_Calorias:39,
        Numero_Porciones:6

    });
    const Guardar_Registro = await registro_1.save();
*/

    //Imprimir datos de plato
   const Imprimir_platos = await Plato.find();
   for(let i=0;i<Imprimir_platos.length;i++){
    console.log("Nombre del Plato: ",Imprimir_platos[i].Nombre_de_Plato);

   }
    //Imprimir datos de Imprimir_Pacientes

   const imprimir_Pacientes = await Paciente.find();
   let i=0;
   while(i<imprimir_Pacientes.length){
    console.log("Nombre del Paciente: ",imprimir_Pacientes[i].Nombre," Con identificacion: ",imprimir_Pacientes[i].Identificacion,", Edad:",imprimir_Pacientes[i].Edad," Y altura:",imprimir_Pacientes[i].Altura);
    i++;
   }


   const imprimir_registros = await Registro.find();
    do{
    console.log("Fecha: ",imprimir_registros[i].Fecha ," - ",imprimir_registros[i].Hora,", Edad: ",imprimir_Pacientes[i].Edad,", Numero de calorias: ",imprimir_registros[i].Numero_De_Calorias,"Y sus Porciones: ",imprimir_registros[i].Numero_Porciones);
    i++;
   }while(i<imprimir_registros.length) 

       
} catch (error) {
    console.log(error.message);       
}
})();
    
 
 
 