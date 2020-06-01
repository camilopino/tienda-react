const express= require('express');
const router= express.Router();
const controlador= require('../controladores/controladores.js')

router.get('/',controlador.getProductos);
router.post('/',controlador.crearProductos);
router.get('/:producto',controlador.getProducto);
router.put('/:producto',controlador.editarProductos);
router.delete('/:id',controlador.deleteProductos);



module.exports= router;
