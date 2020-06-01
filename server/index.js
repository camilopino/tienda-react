const express= require('express');
const app= express();
const morgan= require('morgan');
const { mongoose }= require('./DB.js');
const cors = require('cors');


//settings
app.set('port',3000);
//midelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}));

//routes
app.use('/principal',require('./rutas/rutas'));
app.use('/login',require('./rutas/rutaUsuario'));

//starting the server
app.listen(app.get('port'),()=>{
  console.log('server corriendo en puerto:'+app.get('port'))
})
