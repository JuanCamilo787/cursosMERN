const express = require('express');
const app = express();

//settings
app.set('Dueno', 'Juan Camilo');

//middlewares
app.use((req, res, next)=>{
    console.log("server iniciado por: "+ app.get('Dueno'));
    next();
})

// rutas
app.get('/',(req, res)=>{
    res.end("primera pagina");
});

app.get('/second',(req, res)=>{
    res.end("segunda pag");
})

app.listen(3000);