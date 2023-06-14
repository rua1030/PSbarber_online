const express=require('express');
const Router=express.Router();
// Se importan los módulos necesarios

const Proveedor = require('../servicios/Proveedor/proveedorFind');
const ProveedorInsertar=require('../servicios/Proveedor/proveedorInsert')
const ProveedorActualizar=require('../servicios/Proveedor/proveedorUpdate')
const ProveedorDelete=require('../servicios/Proveedor/proveedorDelete')

// Se crean instancias de las clases necesarias
const Proveedor1 = new Proveedor();
const insertar=new ProveedorInsertar();
const actualizar=new ProveedorActualizar();
const eliminar=new ProveedorDelete();

Router.get('/', async(req, res)=>{

   const result=await Proveedor1.findProveedor();
    if(result){
        res.status(200).send(result)
       }else{
        res.status(404).send('No hay proveedor')
       }
})
// Ruta para obtener un proovedor por su ID
//Listar
Router.get('/:id', async(req, res)=>{
    const id=req.params.id;

    const result=await Proveedor1.findOneProveedor({id});

    if(result){
        res.status(200).send(result)
      }else{
       res.status(404).send('No se encotro nada')
      }
});       

// Ruta para insertar un nuevo proveedor
//Insertar
Router.post('/', async(req, res)=>{
    const body=req.body;
    const result= await insertar.insertMany(body);
   
    if(result){
        res.status(200).json({
           message: 'Se creo el proveedor',
           result,
       
        });
      }else{
       res.status(404).send('No se agrego el proveedor')
      }
});

// Ruta para actualizar un proveedor por su ID
//Update
Router.patch('/:id', async (req, res)=>{
    const id = req.params.id;
    const body = req.body.body;
    const result= await actualizar.updateOne(id,body);

    if(result){
        res.status(200).json({
            message: 'Se actualizo el proveedor',
            result,
            //data: body
        });
    }else{
        res.status(404).send("No se actualizo el proveedor");
    }
})
// Ruta para actualizar varios proveedores
//UPDATE MANY
Router.put('/', async (req, res)=>{
    const body = req.body;

    const result=await actualizar.updateMany(body);
    if(result){
        res.status(200).json({
            message: 'Se actualizo el proveedor',
            result,
            //data: body
        });
    }else{
        res.status(400).send("No se actualizo el proveedor");
    }
})

// Ruta para eliminar un proveedor por su ID
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
        res.status(404).send("No se actualizo el proveedor");
    }
    
})
// Ruta para eliminar varios proveedores
//DELETE MANY 
Router.delete('/', async (req, res)=>{
    const body=req.body;
    const result = await eliminar.deleteMany(body);
    if(result){
        res.status(200).json({
            message: 'Se borro el proveedor',
            result,
            //data: body
        });
    }else{
        res.status(404).send("No se borro el proveedor");
    }
   
})


module.exports=Router;