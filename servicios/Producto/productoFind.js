const {MongoClient,ObjectId}=require('mongodb')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

class ProductoFind{
    constructor(){}

//Metodo para buscar todos los productos
    async find(){
        const client = new MongoClient(uri)
    
        try {
            await client.connect()
            const result = await client.db('taller').collection('producto').find({}).toArray()
         return result
        } catch (error) {
            console.log(error)
        }finally{
            await client.close()
        }
    }

    //Metodo para buscar un producto por su ID
    async findOne(id){
        const client = new MongoClient(uri)
        try {
            await client.connect()
            const result = await client.db('taller').collection('producto').findOne({"_id":new ObjectId(id)})
        return result;
        } catch (error) {
            console.log(error)
        }finally{
            await client.close()
        }
}
}


module.exports=ProductoFind;