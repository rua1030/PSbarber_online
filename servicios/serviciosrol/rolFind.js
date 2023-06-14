
const {MongoClient,ObjectId}=require('mongodb')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'
//servis pa un culo
class rolFind{
    constructor(){}


    async find(){
        const client = new MongoClient(uri)
    
        try {
            await client.connect()
            const result = await client.db('taller').collection('rol').find({}).toArray()
         return result
        } catch (error) {
            console.log(error)
        }finally{
            await client.close()
        }
    }
    async findOne(id){
        const client = new MongoClient(uri)
        try {
            await client.connect()
            const result = await client.db('taller').collection('rol').findOne({"_id":new ObjectId(id)})
        return result;
        } catch (error) {
            console.log(error)
        }finally{
            await client.close()
        }
}
}


module.exports=rolFind;


