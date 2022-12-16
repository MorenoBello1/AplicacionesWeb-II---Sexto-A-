const mongoose = require("mongoose");

const pedidomeseroEsquema = mongoose.Schema({
    id: {type: Number},
    IDplato: {type: Number},
    IDmesero : {type:Number},
    fecha: {type:String},
    mesa : {type: Number},
    cantidad : {type: Number},
    precio : {type: Number}
})

module.exports = mongoose.model('Pedido-Mesero', pedidomeseroEsquema);