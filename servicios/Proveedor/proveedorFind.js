const {MongoClient,ObjectId}=require('mongodb')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

class proveedorFind{
    constructor(){}

//Metodo para buscar todos los proveedores
    async findProveedor(){
        const client = new MongoClient(uri)
    
        try {
            await client.connect()
            const result = await client.db('taller').collection('proveedor').find({}).toArray()
         return result
        } catch (error) {
            console.log(error)
        }finally{
            await client.close()
        }
    }

    //Metodo para buscar un proveedor por su ID
    async findOneProveedor(id){
        const client = new MongoClient(uri)
        try {
            await client.connect()
            const result = await client.db('taller').collection('proveedor').findOne({"_id":new ObjectId(id)})
        return result;
        } catch (error) {
            console.log(error)
        }finally{
            await client.close()
        }
}
}


module.exports=proveedorFind;