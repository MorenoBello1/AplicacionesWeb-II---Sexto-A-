const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const RegistrosSchema = new Schema({
    fecha: {
        type: String
        
    },
    hora: {
        type: String
    },
    Numero_Calorias_Comsumidas: {
        type: String
    },
    Numero_Porciones: {
        type: String
    }
 });

const registros = mongoose.model('Registros', RegistrosSchema);

module.exports = registros;