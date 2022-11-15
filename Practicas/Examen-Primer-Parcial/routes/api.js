const express = require ('express');
const registros = require('../models/registros');
const router = express.Router();
const Registros = require('../models/registros');

router.delete("/registros/:id", (req, res) => {
    const {id_} = req.params;
    Registros
    .remove({_id_: id_})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))
})

module.exports = router;