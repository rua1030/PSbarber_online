const express = require("express")
const Router = express.Router()

const rolFind = require("../servicios/serviciosrol/rolFind")
const rolInsert= require("../servicios/serviciosrol/rolInsert")
const rolupdate= require("../servicios/serviciosrol/rolupdate")
const rolDelete= require("../servicios/serviciosrol/rolDelete")

const update = new rolupdate()
const insertar=new rolInsert()
const listar=new rolFind()
const eliminar =new rolDelete()

    Router.get('/', async(req, res)=>{ //Funcion asincronica
        const result = await listar.find()
        if(result){
            res.status(200).send(result)
            }else{
                res.status(404).send('No hay roles')
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
                    message:'se creo el rol',
                    result
                })
                }else{
                    res.status(404).send('No se registro el rol')
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
                                message:'se elimina el rol',
                                result
                            })
                            }else{
                                res.status(404).send('No se elimino el rol')
                            }
                            }
                        )
    Router.delete('/', async (req, res)=>{

        const body=req.body;                       
        const result= await eliminar.deleteMany(body);
                if(result){
                            res.status(200).json({
                                message: 'Se borro el rol',
                                 result,
           });
               }else{
                    res.status(404).send("No se Se borro el rol");
               }
                         
               })
    


module.exports = Router;