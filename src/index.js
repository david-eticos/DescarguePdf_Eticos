'use strict'

const app = require("./app");
const port = require("./config");


app.listen(port.port,()=>{
    console.log(`servidor corriendo correctamente url: localhost:${port.port}`)
    
})








