const { MongoClient, ObjectId } = require('mongodb');
const bodyparser = require('body-parser');
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';

class ventaDelete{

    constructor(){}

    async deleteOneVenta(id){
        const client = new MongoClient(uri);

        try {
            await client.connect()
            const result = await client.db('taller').collection('Venta').deleteOne({_id: new ObjectId(id)});
         return result;
        } catch (e) {
            console.error(e)
        }finally{
            await client.close()
        }
    }

    async deleteManyVenta(){
    
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db('taller').collection('Venta').deleteMany(body);
            return result;
        }catch(e){
            console.log(e);
        }finally{
            await client.close();
        }
    }
}

module.exports = ventaDelete;