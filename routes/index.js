const express = require('express');
const router = express.Router();
const Chiste = require('../schema/Chiste')

router.get('/obtener',async (req,res)=>{
    try {
        const chistes = await Chiste.find().limit(5);
        res.send({chistes}).status(200);
        
    } catch (error) {
        console.log(error)
    }

})

router.post('/subirChiste',async (req,res)=>{
    const nuevoChiste = new Chiste({
        titulo:req.body.titulo,
        texto:req.body.texto
    });

    try {
        const chisteSubido = await nuevoChiste.save();
        res.send({chisteSubido}).status(201);
        
    } catch (error) {
        console.log(error)
    }

})

router.delete('/borrarChiste',async (req,res)=>{
    try {
        
        const chisteBorrado = await Chiste.findOneAndDelete({texto:req.body.texto});
        res.send({chisteBorrado}).status(200);
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;