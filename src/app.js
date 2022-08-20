'use strict'

const express = require("express");
const bodyparser = require("body-parser");
const app = express()
const router = require("./routes/routes");

//cargar archivos y rutas
// var Archivos_routes= require("./routes/Rutaarchivos")

//middlewares se ejecuta en segundo plano para manejador json
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//CORS

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// rutas de consumo de los metodos http o apis en posmant valida

app.use('/ini',router);

// app.get('/test',(req,res)=>{
//     res.status(200).send({
//         message: "Api rest"
//     })

// });

// app.get('/',(req,res)=>{
//     res.status(200).send({
//         conne: "mongo db",
//         express: "corriendo"
//     })
// })

// app.post('/post/:id',(req,res)=>{

//     console.log(req.body.tipo)
//     console.log(req.body.numero) // son los datos que se envian en el body de posmant
//     console.log(req.query.data) // son so datos que se envian como parametros en la url ?
//     console.log(req.params.id) //el id es el que se envia en la ruta

//     res.status(200).send({
//         messege: "respuesta desde post"
//     })
// })

//exportar el modulo
module.exports=app;

