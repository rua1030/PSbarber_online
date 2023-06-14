const { MongoClient, ObjectId } = require('mongodb');
const bodyparser = require('body-parser');
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';

class horarioUpdate{

    constructor(){};

    async updateOneHorario(id, body){
        const client = new MongoClient(uri);    
        try{
            await client.connect();
            const resultado = await client.db('taller').collection('Horario').updateOne({
                "_id": new ObjectId(id)
            },{
                $set:{
                    body 
                }});
                return resultado;
        }catch(e){
            console.error(e);
        }finally{
            await client.close();
        }        
    }

    async updateManyHorario(body){
        const client = new MongoClient(uri);    
        try{
            await client.connect();
            const resultado = await client.db('taller').collection('Horario').updateMany({},{
                $set:{
                    body
                }});
                return resultado;
        }catch(e){
            console.error(e);
        }finally{
            await client.close();
        }        
    }
}

module.exports = horarioUpdate;