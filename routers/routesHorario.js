const express = require("express");
const Router = express.Router();

const horarioDelete = require("../servicios/horario/horarioDelete");
const horarioInsert = require("../servicios/horario/horarioInsert");
const horarioFind = require("../servicios/horario/horarioFind");
const horarioUpdate = require("../servicios/horario/horarioUpdate");

const eliminar = new horarioDelete();
const actualizar = new horarioUpdate();
const insertar = new horarioInsert();
const listar = new horarioFind();



Router.get('/', async(req, res)=>{ //Funcion asincronica
    const result = await listar.findHorario();
    if(result){
        res.status(200).send(result);
    }else{
        res.status(404).send('No se encontraron los horarios');
    }
});

Router.get('/:id', async(req, res)=>{
    const id=req.params.id;
    
    const result=await listar.findOneHorario({id});
    
    if(result){
        res.status(200).send(result)
    }else{
        res.status(404).send('No se encontro el horario')
    }
});

Router.post('/', async(req, res)=>{
    const body=req.body;
    const result= await insertar.insertManyHorario(body);
   
    if(result){
        res.status(200).json({
           message: 'Se insertó correctamente los nuevos horarios',
           result,
       
        });
      }else{
       res.status(404).send('No se insertó los nuevos horarios')
      }
});

Router.patch('/:id', async (req, res)=>{
    const id = req.params.id;
    const body = req.body.body;

    const result= await actualizar.updateOneHorario(id,body);

    if(result){
        res.status(200).json({
            message: 'Se actualizo correctamente el horario',
            result,
        });
    }else{
        res.status(404).send("No se pudo actualizar el horario");
    }
})

Router.put('/', async (req, res)=>{
    const body = req.body;

    const result=await actualizar.updateManyHorario(body);
    if(result){
        res.status(200).json({
            message: 'Los horarios se actualizaron exitosamente',
            result,
        });
    }else{
        res.status(400).send("No se actualizaron los horarios");
    }
})

Router.delete('/:id', async (req, res)=>{
    const id = req.params.id;
    const result= await eliminar.deleteOneHorario(id);
    if(result){
        res.status(200).json({
            message: 'Se elimino el horarios exitosamente',
            result,
        });
    }else{
        res.status(404).send("No se elimino el horario");
    }
    
})

Router.delete('/', async (req, res)=>{
    const body=req.body;
    const result = await eliminar.deleteManyHorario(body);
    if(result){
        res.status(200).json({
            message: 'Se eliminaron los horarios exitosamente',
            result,
        });
    }else{
        res.status(404).send("No se eliminaron los horarios");
    }
   
})

module.exports = Router;