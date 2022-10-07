const error = new Error();
const {Plato, Registro} = require ('./T02- Datos');
// Constantes, Una para generar error, y la otra para extrar los array "Plato" y "Registro" de Datos.js

async function Busqueda(aux_id_Registro){
    const registros = Registro.find((registros)=> registros.id_Registro===aux_id_Registro );
    //Constante de registro para conocer si existe el registro que se envia de aux_Id_Registro del array Registro.
    if (!registros) 
    {
        error.message="No encontramos el registro";
        throw error;//si  no se encuentre el aux_id_Registro lanzara el error.
    }
    else{
        //Caso contrario, se crea una relacion de el id_plato que debe tener la  entidad transaccional 
        Relacion_Plato=Plato.find(item=> item.id_Plato===registros.id_Plato );
        console.log(`Id de Registro: ${registros.id_Registro} ,Nombre del plato: ${Relacion_Plato.Nombre_de_Plato} Porciones ${registros.Numero_Porciones}  Sus Calorias: ${registros.Numero_Calorias_Consumidas}`);
        console.log(`Con fecha de: ${registros.fecha}  -  ${registros.hora} \n`);
    }  
}
(async ()=>{
    try
    {
        //en este caso enviamos "5" metodo de busqueda como Aux_id_Registro
        await Busqueda(5, find_Plato(5,(err,Platos)=>{
        //Ademas ejecutamos una funcion con un callback en este caso enviamos "5" si existe el id_plato continua si no lanza error.
            if(err) return console.log(err);
            console.log(Platos);
        }));
         
        
    }
    catch (err)
    {
        console.log(error.message)
    }
}
)();
//funcion  de Busqueda de plato mediante el callBack.
function find_Plato (aux_Nombre_de_Plato,CallBack){
    const Platos = Plato.find(Platos=> Platos.id_Plato===aux_Nombre_de_Plato );
    if (!Platos) {

        CallBack(`\nNo se encontro el Plato con id : ${aux_Nombre_de_Plato}.`);
    }else {
        CallBack(null,`\nSe ha encontrado el Plato con la Id : ${Platos.id_Plato} ,pertenece a :  ${Platos.Nombre_de_Plato}.`)

    }
}
