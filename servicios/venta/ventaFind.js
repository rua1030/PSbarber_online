const {MongoClient,ObjectId}=require('mongodb')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';
class ventaFind{
    constructor(){}


    async findVenta(){
        const client = new MongoClient(uri)
    
        try {
            await client.connect()
            const result = await client.db('taller').collection('Venta').find({}).toArray();
         return result;
        } catch (e) {
            console.error(e)
        }finally{
            await client.close()
        }
    }
    async findOneVenta(id){
        const client = new MongoClient(uri)
        try {
            await client.connect()
            const result = await client.db('taller').collection('Venta').findOne({"_id":new ObjectId(id)})
        return result;
        } catch (e) {
            console.error(e)
        }finally{
            await client.close()
        }
}
}

module.exports = ventaFind;