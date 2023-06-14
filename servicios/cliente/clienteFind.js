const {MongoClient,ObjectId}=require('mongodb')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';
class clienteFind{
    constructor(){}


    async findCliente(){
        const client = new MongoClient(uri)
    
        try {
            await client.connect()
            const result = await client.db('taller').collection('Cliente').find({}).toArray();
         return result;
        } catch (e) {
            console.error(e)
        }finally{
            await client.close()
        }
    }
    async findOneCliente(id){
        const client = new MongoClient(uri)
        try {
            await client.connect()
            const result = await client.db('taller').collection('Cliente').findOne({"_id":new ObjectId(id)})
        return result;
        } catch (e) {
            console.error(e)
        }finally{
            await client.close()
        }
}
}

module.exports = clienteFind;