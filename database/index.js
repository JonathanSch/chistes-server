const mongoose = require('mongoose');

const connect = () =>{
    mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true },err=>err?console.log(err):console.log('Database Connected'));   
}
module.exports = connect;