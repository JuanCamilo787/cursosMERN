const express = require('express');
const app = express();
//MORGAN
//const morgan = require('morgan');

//requiriendo rutas 
const routes = require('./routes');
const routesApi = require('./routesApi');
//settings
app.set('Dueno', 'Juan Camilo');
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next)=>{
    //console.log("server iniciado por: "+ app.get('Dueno'));
    next();
})

//MORGAN
//app.use(morgan('combined'));

// rutas
app.use(routes);
app.use(routesApi);

app.get('*', (req, res)=>{
    res.end("Not found");
})

app.listen(3000);