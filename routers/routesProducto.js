const express=require('express');
const Router=express.Router();
// Se importan los módulos necesarios
const Producto = require('../servicios/Producto/productoFind');
const ProductoInsertar=require('../servicios/Producto/productoInsert')
const ProductoActualizar=require('../servicios/Producto/productoUpdate')
const ProductoDelete=require('../servicios/Producto/productoDelete')


// Se crean instancias de las clases necesarias
const Producto1 = new Producto();
const insertar=new ProductoInsertar();
const actualizar=new ProductoActualizar();
const eliminar=new ProductoDelete();

Router.get('/', async(req, res)=>{

   const result=await Producto1.find();
    if(result){
        res.status(200).send(result)
       }else{
        res.status(404).send('No hay permisos')
       }
})
// Ruta para obtener una producto por su ID
//Listar
Router.get('/:id', async(req, res)=>{
    const id=req.params.id;

    const result=await Producto1.findOne({id});

    if(result){
        res.status(200).send(result)
      }else{
       res.status(404).send('No se encotro nada')
      }
});       

// Ruta para insertar una nuevo producto
//Insertar
Router.post('/', async(req, res)=>{
    const body=req.body;
    const result= await insertar.insertMany(body);
   
    if(result){
        res.status(200).json({
           message: 'Se creo el producto',
           result,
       
        });
      }else{
       res.status(404).send('No se agrego el producto')
      }
});

// Ruta para actualizar un producto por su ID
//Update
Router.patch('/:id', async (req, res)=>{
    const id = req.params.id;
    const body = req.body.body;
    const result= await actualizar.updateOne(id,body);

    if(result){
        res.status(200).json({
            message: 'Se actualizo el producto',
            result,
            //data: body
        });
    }else{
        res.status(404).send("No se actualizo el producto");
    }
})
// Ruta para actualizar varios productos
//UPDATE MANY
Router.put('/', async (req, res)=>{
    const body = req.body;

    const result=await actualizar.updateMany(body);
    if(result){
        res.status(200).json({
            message: 'Se actualizo el producto',
            result,
            //data: body
        });
    }else{
        res.status(400).send("No se actualizo el producto");
    }
})

// Ruta para eliminar un producto por su ID
// DELETE ONE

Router.delete('/:id', async (req, res)=>{
    const id = req.params.id;
    const result= await eliminar.deleteOne(id);
    if(result){
        res.status(200).json({
            message: 'Se borro el proveedor',
            result,
            //data: body
        });
    }else{
        res.status(404).send("No se actualizo el producto");
    }
    
})
// Ruta para eliminar varios productos
//DELETE MANY 
Router.delete('/', async (req, res)=>{
    const body=req.body;
    const result = await eliminar.deleteMany(body);
    if(result){
        res.status(200).json({
            message: 'Se borro el producto',
            result,
            //data: body
        });
    }else{
        res.status(404).send("No se borro el producto");
    }
   
})


module.exports=Router;