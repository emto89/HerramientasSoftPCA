const express = require("express");
const bodyParser = require("body-parser");
const { addBook } = require("./index");
const app = express();
const port = 3000 ;

//middleware
app.use(bodyParser.json());


//rutas
app.get('/',( req, res ) => {
    res.send("Hola mundo")
})

app.post('/agregar', addBook);


// Server
app.listen( port, ()=>{
    console.log("Servidor corriendo en el puerto", port);
});




