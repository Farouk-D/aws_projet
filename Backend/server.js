const express= require("express");
const bodyParser=require('body-parser');
const userRoutes=require('./routes/user.routes');
require('dotenv').config({path:' .env'})
require('./db.js')


const app=express();
app.use(bodyParser.json()) 
//Les routes 
app.use('/api/user',userRoutes);
// lancement du server
app.listen(process.env.PORT,() => {
    console.log("Serveur actif ... "+process.env.PORT+" port")
})