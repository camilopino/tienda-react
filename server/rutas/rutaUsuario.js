const express= require('express');
const routerU= express.Router();
const Usuario= require('../modelos/modeloUsuario')

routerU.get('/:nombre', async(req,res)=>{
  const usuarios= await Usuario.find();
  res.json(usuarios)
})


routerU.post('/',function (req, res){
  let user= req.body.nombre
  console.log(user)
  let pass= req.body.Contrasena
  console.log(pass)
  Usuario.findOne({nombre:user, contrasena:pass}).exec(function(err,doc){
    if(err){
      res.status(500)
      res.json(err)
    }
      res.json(doc)


  })
} )
module.exports=routerU
