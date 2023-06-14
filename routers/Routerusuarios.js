const express = require("express")
const Router= express.Router()

const usuarioFind = require("../servicios/serviciosusuarios/usuariosFind")
const usuarioInsert= require("../servicios/serviciosusuarios/usuarioInsert")
const usuarioupdate= require("../servicios/serviciosusuarios/usuarioupdate")
const usuarioDelete= require("../servicios/serviciosusuarios/usuariosDelete")

const listar=new usuarioFind()
const insertar=new usuarioInsert()
const update = new usuarioupdate()
const eliminar =new usuarioDelete()

    Router.get('/', async(req, res)=>{ //Funcion asincronica
        const result = await listar.find()
        if(result){
            res.status(200).send(result)
            }else{
                res.status(404).send('No hay usuarios')
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
                    message:'se creo el usuario',
                    result
                })
                }else{
                    res.status(404).send('No se registro el usuario')
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
                                message:'se elimina el usuario',
                                result
                            })
                            }else{
                                res.status(404).send('No se elimino el usuario')
                            }
                            }
                        )
    Router.delete('/', async (req, res)=>{

        const body=req.body;                       
        const result= await eliminar.deleteMany(body);
                if(result){
                            res.status(200).json({
                                message: 'Se borro el usuario',
                                 result,
           });
               }else{
                    res.status(404).send("No se Se borro el usuario");
               }
                         
               })
    
module.exports = Router;