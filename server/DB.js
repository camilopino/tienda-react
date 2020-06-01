const mongoose = require('mongoose');
const URL= 'mongodb://localhost/tienda'
mongoose.connect(URL)
.then(db=>console.log('conxion con la base de datos exitosa'))
.catch(err=> console.error(err))

module.exports=mongoose;
