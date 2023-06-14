const express=require('express');
const Router=express.Router();
// Se importan los módulos necesarios

const Compra = require('../servicios/Compra/compraFind');
const CompraInsertar=require('../servicios/Compra/compraInsert')
const CompraActualizar=require('../servicios/Compra/compraUpdate')
const CompraDelete=require('../servicios/Compra/compraDelete')

// Se crean instancias de las clases necesarias
const Compra1 = new Compra();
const insertar=new CompraInsertar();
const actualizar=new CompraActualizar();
const eliminar=new CompraDelete();

// Ruta para obtener todas las compras
Router.get('/', async(req, res)=>{

   const result=await Compra1.find();
    if(result){
        res.send(result)
       }else{
        res.send('No se encotro nada')
       }
})

// Ruta para obtener una compra por su ID
//Listar
Router.get('/:id', async(req, res)=>{
    const id=req.params.id;

    const result=await Compra1.findOne({id});

    if(result){
        res.status(200).send(result)
      }else{
       res.status(404).send('No se encotro nada')
      }
});       

// Ruta para insertar una nueva compra
//Insertar
Router.post('/', async(req, res)=>{
    const body=req.body;
    const result= await insertar.insertMany(body);
   
    if(result){
        res.status(200).json({
           message: 'Se creo la compra',
           result,
       
        });
      }else{
       res.status(404).send('No se agrego la compra')
      }
});

// Ruta para actualizar una compra por su ID
//Update
Router.patch('/:id', async (req, res)=>{
    const id = req.params.id;
    const body = req.body.body;
    const result= await actualizar.updateOne(id,body);

    if(result){
        res.status(200).json({
            message: 'Se actualizo la compra',
            result,
            //data: body
        });
    }else{
        res.status(404).send("No se actualizo la compra");
    }
})
// Ruta para actualizar varias compras
//UPDATE MANY
Router.put('/', async (req, res)=>{
    const body = req.body;

    const result=await actualizar.updateMany(body);
    if(result){
        res.status(200).json({
            message: 'Se actualizaron las compras',
            result,
            //data: body
        });
    }else{
        res.status(400).send("No se actualizaron las compras");
    }
})

// Ruta para eliminar una compra por su ID
// DELETE ONE

Router.delete('/:id', async (req, res)=>{
    const id = req.params.id;
    const result= await eliminar.deleteOne(id);
    if(result){
        res.status(200).json({
            message: 'Se borro la compra',
            result,
            //data: body
        });
    }else{
        res.status(404).send("No se actualizo la compra");
    }
    
})
// Ruta para eliminar varias compras
//DELETE MANY 
Router.delete('/', async (req, res)=>{
    const body=req.body;
    const result = await eliminar.deleteMany(body);
    if(result){
        res.status(200).json({
            message: 'Se borro la compra',
            result,
            //data: body
        });
    }else{
        res.status(404).send("No se borro la compra");
    }
   
})


module.exports=Router;