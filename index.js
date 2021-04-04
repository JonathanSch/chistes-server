require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('./database')();

app.use(express.json());
app.use('/api',require('./routes'))

app.use(require('cors')());

app.get('/',(req,res)=>{
    res.send({message:"Everything great"})
});

app.listen(port,err=>err?console.log(err):console.log(`Server running on port ${port}`));