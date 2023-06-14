const { MongoClient, ObjectId } = require('mongodb');
const bodyparser = require('body-parser');
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';

class servicioDelete{

    constructor(){}

    async deleteOneServicio(id){
        const client = new MongoClient(uri);

        try {
            await client.connect()
            const result = await client.db('taller').collection('Servicio').deleteOne({_id: new ObjectId(id)});
         return result
        } catch (e) {
            console.error(e)
        }finally{
            await client.close()
        }
    }

    async deleteManyServicio(){
    
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db('taller').collection('Servicio').deleteMany(body);
            return result;
        }catch(e){
            console.log(e);
        }finally{
            await client.close();
        }
    }
}

module.exports = servicioDelete;