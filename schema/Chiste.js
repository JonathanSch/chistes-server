const mongoose = require('mongoose');

const chisteSchema = new mongoose.Schema({
    titulo:{
        type:String,
        required:true
    },
    texto:{
        type:String,
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model('Chiste',chisteSchema);