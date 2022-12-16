const express = require("express");

const router = express.Router();
const userSchema = require("./esquema")
router.post("/pedidomesero", (req,res) =>  {
    const pedidomesero = userSchema(req.body);
    pedidomesero.save().then((data) => res.json(data)).catch((error)=>res.json({message: error}));
})

//Este corresponde al metodo que copiara los datos ingresados
router.copy("/pedidomesero/id:", (rep, res) => {
    const {id} = req.params
    userSchema
    .copy({id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))

})
module.exports = router;