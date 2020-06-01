const Modelo= require('../modelos/modelproduct')
const pordcontroler ={};

pordcontroler.getProductos= async (req, res)=>{
  const productos=await Modelo.find()
  res.json(productos)
}
pordcontroler.crearProductos= async (req, res)=>{
  const nuevo= new Modelo(req, body);
  await nuevo.save()
  res.json(
    {'status':'producto guardado'}
  )

}
pordcontroler.getProducto= async (req, res)=>{
  const producto=await Modelo.find({"producto":req.params.producto});
  res.json(producto);
}
pordcontroler.editarProductos= async (req, res)=>{

  const producto= req.params.producto;
  const cantidad= req.body.cantidad;
  console.log(producto)
  console.log(cantidad)
  await Modelo.findOneAndUpdate({producto:producto}, {$set: {cantidad:cantidad} })
  res.json(
    {'status':'producto'+producto+ 'actualizado'}
  )
}


pordcontroler.deleteProductos=async (req, res)=>{
    await Modelo.findByIdAndRemove(req.params.id)
    res.json({'status':'producto eliminado'})
}


module.exports=pordcontroler;
