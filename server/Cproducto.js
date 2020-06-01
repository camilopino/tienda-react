var Producto= require ('./modelos/modelproduct')

module.exports.insertUsuario= function(callback){
  let producto = new Producto({src:"../../../images/zanahoria.jpg", producto:"Zanahoria",precio:"400",cantidad:145})

  producto.save((error)=>{
    if(error)callback(error)
    callback(null,"producto guardado correctamente")
  })
}
