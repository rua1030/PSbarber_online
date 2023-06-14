const express = require("express");
const Router = express.Router();

const ventaInsert = require("../servicios/venta/ventaInsert");
const ventaFind = require("../servicios/venta/ventaFind");
const ventaUpdate = require("../servicios/venta/ventaUpdate");
const ventaDelete = require("../servicios/venta/ventaDelete");

const eliminar = new ventaDelete();
const actualizar = new ventaUpdate();
const insertar=new ventaInsert();
const listar = new ventaFind();



Router.get('/', async(req, res)=>{ //Funcion asincronica
    const result = await listar.findVenta();
    if(result){
        res.status(200).send(result);
    }else{
        res.status(404).send('No se encontraron las ventas');
    }
});

Router.get('/:id', async(req, res)=>{
    const id=req.params.id;
    
    const result=await listar.findOneVenta({id});
    
    if(result){
        res.status(200).send(result)
    }else{
        res.status(404).send('No se encontro la venta')
    }
});

Router.post('/', async(req, res)=>{
    const body=req.body;
    const result= await insertar.insertManyVenta(body);
   
    if(result){
        res.status(200).json({
           message: 'Se insertó correctamente la nueva venta',
           result,
       
        });
      }else{
       res.status(404).send('No se insertó la nueva venta')
      }
});

Router.patch('/:id', async (req, res)=>{
    const id = req.params.id;
    const body = req.body.body;

    const result= await actualizar.updateOneVenta(id,body);

    if(result){
        res.status(200).json({
            message: 'Se actualizo correctamente la venta',
            result,
        });
    }else{
        res.status(404).send("No se pudo actualizar la venta");
    }
})

Router.put('/', async (req, res)=>{
    const body = req.body;

    const result=await actualizar.updateManyVenta(body);
    if(result){
        res.status(200).json({
            message: 'Las ventas se actualizaron exitosamente',
            result,
        });
    }else{
        res.status(400).send("No se actualizaron las peliculas");
    }
})

Router.delete('/:id', async (req, res)=>{
    const id = req.params.id;
    const result= await eliminar.deleteOneVenta(id);
    if(result){
        res.status(200).json({
            message: 'Se elimino la venta exitosamente',
            result,
        });
    }else{
        res.status(404).send("No se elimino la venta");
    }
    
})

Router.delete('/', async (req, res)=>{
    const body=req.body;
    const result = await eliminar.deleteManyVenta(body);
    if(result){
        res.status(200).json({
            message: 'Se eliminaron las ventas exitosamente',
            result,
        });
    }else{
        res.status(404).send("No se eliminaron las ventas");
    }
   
})

module.exports = Router;