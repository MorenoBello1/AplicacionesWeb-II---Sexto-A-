

export interface IResRegistro{
    registros: Registro[];
}

export interface Registro{
_id:string;
id_Paciente: string;
id_Plato: string;
fecha: string;
hora: string;
Numero_CaloriasConsumidas: string;
Numero_Porciones: string
}