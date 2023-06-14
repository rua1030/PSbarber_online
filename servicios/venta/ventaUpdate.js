const { MongoClient, ObjectId } = require('mongodb');
const bodyparser = require('body-parser');
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';

class ventaUpdate{

    constructor(){};

    async updateOneVenta(id, body){
        const client = new MongoClient(uri);    
        try{
            await client.connect();
            const result = await client.db('taller').collection('Venta').updateOne({
                "_id": new ObjectId(id)
            },{
                $set:{
                    body
                }});
                return result;
        }catch(e){
            console.error(e);
        }finally{
            await client.close();
        }        
    }

    async updateManyVenta(body){
        const client = new MongoClient(uri);    
        try{
            await client.connect();
            const result = await client.db('taller').collection('Venta').updateMany({},{
                $set:{
                    body
                }});
                return result;
        }catch(e){
            console.error(e);
        }finally{
            await client.close();
        }        
    }
}

module.exports = ventaUpdate;