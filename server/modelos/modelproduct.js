const mongoose= require('mongoose');
const { Schema }= mongoose;

let Producto= new Schema({
  src:{type:String, require:true},
  producto:{type:String, require:true},
  precio: {type:String, require:true},
  cantidad:{type:Number, require:true}
});
module.exports= mongoose.model('productos', Producto)
