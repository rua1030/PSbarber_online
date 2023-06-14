const express = require("express");
const Router = express.Router();

const clienteDelete = require("../servicios/cliente/clienteDelete");
const clienteUpdate = require("../servicios/cliente/clienteUpdate");
const clienteFind = require("../servicios/cliente/clienteFind");
const ClienteInsert = require("../servicios/cliente/clienteInsert");

const eliminar = new clienteDelete();
const actualizar = new clienteUpdate();
const insertar = new ClienteInsert();
const listar = new clienteFind();



Router.get('/', async(req, res)=>{ //Funcion asincronica
    const result = await listar.findCliente();
    if(result){
        res.status(200).send(result);
    }else{
        res.status(404).send('No se encontraron los clientes');
    }
});

Router.get('/:id', async(req, res)=>{
    const id=req.params.id;
    
    const result=await listar.findOneCliente({id});
    
    if(result){
        res.status(200).send(result);
    }else{
        res.status(404).send('No se encontro el cliente');
    }
});

Router.post('/', async(req, res)=>{
    const body=req.body;
    const result= await insertar.insertManyCliente(body);
   
    if(result){
        res.status(200).json({
           message: 'Se insertó correctamente los nuevos clientes',
           result,
       
        });
      }else{
       res.status(404).send('No se insertó los nuevos clientes')
      }
});

Router.patch('/:id', async (req, res)=>{
    const id = req.params.id;
    const body = req.body.body;
    const result= await actualizar.updateOneCliente(id,body);

    if(result){
        res.status(200).json({
            message: 'Se actualizo correctamente el cliente',
            result,
        });
    }else{
        res.status(404).send("No se pudo actualizar el cliente");
    }
})

Router.put('/', async (req, res)=>{
    const body = req.body;

    const result=await actualizar.updateManyCliente(body);
    if(result){
        res.status(200).json({
            message: 'Los clientes se actualizaron exitosamente',
            result,
        });
    }else{
        res.status(400).send("No se actualizaron los clientes");
    }
})

Router.delete('/:id', async (req, res)=>{
    const id = req.params.id;
    const result= await eliminar.deleteOneCliente(id);
    if(result){
        res.status(200).json({
            message: 'Se elimino el cliente exitosamente',
            result,
        });
    }else{
        res.status(404).send("No se elimino el cliente");
    }
    
})

Router.delete('/', async (req, res)=>{
    const body=req.body;
    const result = await eliminar.deleteManyCliente(body);
    if(result){
        res.status(200).json({
            message: 'Se eliminaron los clientes exitosamente',
            result,
        });
    }else{
        res.status(404).send("No se eliminaron los clientes");
    }
   
})

module.exports = Router;