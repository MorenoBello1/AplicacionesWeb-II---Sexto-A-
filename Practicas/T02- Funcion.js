const error = new Error();
const {Plato, Registro} = require ('./Datos');
async function Busqueda(id_Regis){
    const registros = Registro.find((registros)=> registros.id_Registro===id_Regis );
    if (!registros)
    {
        error.message="No encontramos el registro";
        throw error;
    }
    
    else{
        Rela_Plato=Plato.find(item=> item.id_Plato===registros.id_Plato );
        console.log(`Id de Registro: ${registros.id_Registro} ,Nombre del plato: ${Rela_Plato.Nombre_de_Plato} Porciones ${registros.Numero_Porciones}  Sus Calorias: ${registros.Numero_Calorias_Consumidas}`);
        console.log(`Con fecha de: ${registros.fecha}  -  ${registros.hora} \n`);
    }  
}
(async ()=>{
    try
    {
        await Busqueda(7);
    }
    catch (err)
    {
        console.log(error.message)
    }
}
)();
