const { MongoClient, ObjectId } = require('mongodb');
const bodyparser = require('body-parser');
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';

class clienteDelete{

    constructor(){}

    async deleteOneCliente(id){
        const client = new MongoClient(uri);

        try {
            await client.connect()
            const result = await client.db('taller').collection('Cliente').deleteOne({_id: new ObjectId(id)});
         return result
        } catch (e) {
            console.error(e)
        }finally{
            await client.close()
        }
    }

    async deleteManyCliente(){
    
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db('taller').collection('Cliente').deleteMany(body);
            return result;
        }catch(e){
            console.log(e);
        }finally{
            await client.close();
        }
    }
}

module.exports = clienteDelete;