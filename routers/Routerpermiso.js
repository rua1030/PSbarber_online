const express = require("express")
const Router= express.Router()

const permisoFind = require("../servicios/serviciospermisos/permisoFind")
const permisoInsert= require("../servicios/serviciospermisos/permisoInsert")
const permisoupdate= require("../servicios/serviciospermisos/permisoupdate")
const permisoDelete= require("../servicios/serviciospermisos/permisoDelete")

const listar=new permisoFind()
const insertar=new permisoInsert()
const update = new permisoupdate()
const eliminar =new permisoDelete()

    Router.get('/', async(req, res)=>{ //Funcion asincronica
        const result = await listar.find()
        if(result){
            res.status(200).send(result)
            }else{
                res.status(404).send('No hay permisos')
            }
        })
        
    
    
    Router.get('/:id', async(req, res)=>{ //Funcion asincronica - mandar id
        const id = req.params.id;
        const result = await listar.findOne({id})
        if(result){       
            res.status(200).send(result)
            }else{
                res.status(404).send('No hay compras')
            }
            })
            
    
            
    Router.post('/', async(req, res)=>{ //Funcion asincronica - mandar id
        const body = req.body;
        const result = await insertar.insertMany(body)
            if(result){
                    res.status(200).json({
                    message:'se creo el permiso',
                    result
                })
                }else{
                    res.status(404).send('No se registro el permiso')
                }
                })
    
    
    
    Router.patch('/:id', async(req, res)=>{ //Funcion asincronica - mandar id
        const id =req.params.id
        const body = req.body;
        const result = await update.updateOne(id,body);
            if(result){
                    res.status(200).json({
                    message:'se actualizo el estado',
                    result
                    })
            }else{
                    res.status(404).send('No se registro se el estado')
                }
            })
    
    
    
    
    Router.put('/', async(req, res)=>{ //Funcion asincronica - mandar id
        const body = req.body;                
        const result = await update.updateMany(body)
                        
                if(result){
                res.status(200).json({
                            message:'se actualizo el estado',
                            result
                        })
                        }else{
                            res.status(404).send('No se se actualizo el estado')
                        }
                        } 
                        )
    
    
    Router.delete('/:id', async(req, res)=>{ //Funcion asincronica - mandar id
        const id = req.params.id;           
        const result = await eliminar.deleteOne(id)
                    if(result){
                        res.status(200).json({
                                message:'se elimina el permiso',
                                result
                            })
                            }else{
                                res.status(404).send('No se elimino el permiso')
                            }
                            }
                        )
    Router.delete('/', async (req, res)=>{

        const body=req.body;                       
        const result= await eliminar.deleteMany(body);
                if(result){
                            res.status(200).json({
                                message: 'Se borro el permiso',
                                 result,
           });
               }else{
                    res.status(404).send("No se Se borro el permiso");
               }
                         
               })
    
Router.get('/',(req,res)=>{


})


module.exports = Router;