import './style.css'
import axios from "axios";
import {IResRegistro, Registro} from "./interfaces/IRegistro";
//importacion de librerias
//axios puerto para unir backend 
const httpAxios=axios.create({
  baseURL:"http://localhost:2000/api/"
})

const app=document.querySelector<HTMLDivElement>('#app')!
 
//interfaz con las entrada de los datos
app.innerHTML+=`
<div class="contenedor">
<label for="id">Id registro</label>  <input id="id" />
<label for="idPaciente">id paciente</label>  <input id="idPaciente"" />
<label for="idPlato">Id plato</label>  <input id="idPlato" />
<label for="fecha"> fecha</label> <input id="fecha">
<label for="hora">Hora</label> <input id="hora"/>
<label for="NumeroCarloriasConsumidas">numero de las calorias consumidas</label> <input id="NumeroCarloriasConsumidas"/>
<label for="NumeroPorciones">Numero de Porciones</label> <input id="NumeroPorciones"/>


<button id="nuevo">Nuevo</button>
<button id="grabar">Post/Put</button>
<button id="consultar">Consultar</button>

</div>
<div id="cuerpo"/>
`
//declarando constante para ser usada como id y for dentro de la interfaz y permitir el intercambio de informacion 
const nuevo=document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar=document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

const id=document.querySelector<HTMLInputElement>("#id")!
const idPaciente=document.querySelector<HTMLInputElement>("#idPaciente")!
const idPlato=document.querySelector<HTMLInputElement>("#idPlato")!
const fecha=document.querySelector<HTMLInputElement>("#fecha")!
const hora=document.querySelector<HTMLInputElement>("#hora")!
const NumeroCarloriasConsumidas=document.querySelector<HTMLInputElement>("#NumeroCarloriasConsumidas")!
const NumeroPorciones=document.querySelector<HTMLInputElement>("#NumeroPorciones")!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
//metodo para borrar o vaciar
nuevo.addEventListener("click", ()=>{

  id.value=""
  idPaciente.value=""
  idPlato.value=""
  fecha.value=""
  hora.value=""
  NumeroCarloriasConsumidas.value=""
  NumeroPorciones.value=""
})

//metodo para consultar datos 
consultar.addEventListener("click", async()=>{
  const respRegistros:IResRegistro=await (await httpAxios.get<IResRegistro>("registro")).data
  const tabla = document.createElement("table")
  tabla.id="tabla"
  tabla.border="1"

  const {registros}=respRegistros;
  console.log(respRegistros)

  //foreach para recorrer las celdas
  for (const registro of registros)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${registro._id}"></button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${registro._id}`
    }
    cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)


   /*document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value;
        const registro:Registro=await (await httpAxios.get<Registro>(`registro/${idx}`)).data
        idPaciente.value=registro.id_Paciente.toString()
        idPlato.value=registro.id_Plato.toString()
        fecha.value=registro.fecha!.toString()
        hora.value=registro.hora.toString()
        NumeroCarloriasConsumidas.value=registro.Numero_CaloriasConsumidas.toString()
        NumeroPorciones.value=registro.Numero_Porciones.toString()
        id.value=registro._id!.toString()
      })
    })*/
  })
    //metodo para crear un atributo de la entidad
    grabar.addEventListener('click',async ()=>{
      const data:Registro= {
        _id:id.value.toString(),
        id_Paciente:idPaciente.value.toString(),
        id_Plato: idPlato.value.toString(),
        fecha:fecha.value.toString(),
        hora:hora.value.toString(),
        Numero_CaloriasConsumidas:NumeroCarloriasConsumidas.value.toString(),
        Numero_Porciones:NumeroPorciones.value.toString()
    
      }
  
      //if cuando se hace una peticion put para modificar los datos 
      if (id.value.trim().length>0 )
      {
        const resp: Registro = await (await httpAxios.put<Registro>(`registro/${id.value}`, data)).data
        
        console.log(`El Registro fue modificado con éxito`);
        
        return;
      }

      //para la peticion post de envio de datos
      try {
        const resp: Registro =  await (await httpAxios.post<Registro>(`registro`, data)).data
       
        console.log(`El registro fue grabado con éxito `);
      } catch (error) {
        if ( axios.isAxiosError(error)  )
        {
          console.log(error );
          
        }
        
      }
    



    })

  