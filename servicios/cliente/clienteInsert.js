const { MongoClient, ObjectId } = require('mongodb');
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';

class ClienteInsert{
    constructor(){}

    async insertManyCliente(body){
    
        const client=new MongoClient(uri)
       
        try {
            await client.connect();
            const result=await client.db('taller').collection('Cliente').insertMany([body]);
            return result;
        } catch (e) {
            console.error(e)
        }finally{
            await client.close();
        }
    }
}

module.exports = ClienteInsert;
