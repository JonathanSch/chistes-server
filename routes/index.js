const express = require('express');
const router = express.Router();
const Chiste = require('../schema/Chiste')

router.get('/obtener',async (req,res)=>{
    const chistes = await Chiste.find().limit(5);

    res.send({chistes}).status(200);
})

router.post('/subirChiste',async (req,res)=>{
    const nuevoChiste = new Chiste({
        titulo:req.body.titulo,
        texto:req.body.texto
    });

    const chisteSubido = await nuevoChiste.save();
    res.send({chisteSubido}).status(201);
})

router.delete('/borrarChiste',async (req,res)=>{
    const chisteBorrado = await Chiste.findOneAndDelete({texto:req.body.texto});

    res.send({chisteBorrado}).status(200);
})

module.exports = router;