const express = require("express");
const Router = express.Router();

const servicioDelete = require("../servicios/servicio/servicioDelete");
const servicioUpdate = require("../servicios/servicio/servicioUpdate");
const servicioInsert = require("../servicios/servicio/servicioInsert");
const servicioFind = require("../servicios/servicio/servicioFind");

const eliminar = new servicioDelete();
const actualizar = new servicioUpdate();
const insertar = new servicioInsert();
const listar = new servicioFind();



Router.get('/', async(req, res)=>{ //Funcion asincronica
    const result = await listar.findServicio();
    if(result){
        res.status(200).send(result);
    }else{
        res.status(404).send('No se encontraron los servicios');
    }
});

Router.get('/:id', async(req, res)=>{
    const id=req.params.id;
    
    const result=await listar.findOneServicio({id});
    
    if(result){
        res.status(200).send(result)
    }else{
        res.status(404).send('No se encontro el servicio')
    }
});

Router.post('/', async(req, res)=>{
    const body=req.body;
    const result= await insertar.insertManyServicio(body);
   
    if(result){
        res.status(200).json({
           message: 'Se insertó correctamente los nuevos servicios',
           result,
       
        });
      }else{
       res.status(404).send('No se insertó los nuevos servicios')
      }
});

Router.patch('/:id', async (req, res)=>{
    const id = req.params.id;
    const body = req.body.body;

    const result= await actualizar.updateOneServicio(id,body);

    if(result){
        res.status(200).json({
            message: 'Se actualizo correctamente el servicio',
            result,
        });
    }else{
        res.status(404).send("No se pudo actualizar el servicio");
    }
})

Router.put('/', async (req, res)=>{
    const body = req.body;

    const result=await actualizar.updateManyServicio(body);
    if(result){
        res.status(200).json({
            message: 'Los servicios se actualizaron exitosamente',
            result,
        });
    }else{
        res.status(400).send("No se actualizaron los servicios");
    }
})

Router.delete('/:id', async (req, res)=>{
    const id = req.params.id;
    const result= await eliminar.deleteOneServicio(id);
    if(result){
        res.status(200).json({
            message: 'Se elimino el servicio exitosamente',
            result,
        });
    }else{
        res.status(404).send("No se elimino el servicio");
    }
    
})

Router.delete('/', async (req, res)=>{
    const body=req.body;
    const result = await eliminar.deleteManyServicio(body);
    if(result){
        res.status(200).json({
            message: 'Se eliminaron los servicios exitosamente',
            result,
        });
    }else{
        res.status(404).send("No se eliminaron los servicios");
    }
   
})

module.exports = Router;