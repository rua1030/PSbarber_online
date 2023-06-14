const {MongoClient,ObjectId}=require('mongodb')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'
//sevis pa un culo
require('dotenv').config();
class usuarioupdate{
    constructor(){}


    async updateOne(id,body){
        const client = new MongoClient(uri)
                    try {
                        await client.connect()
                        const result = await client.db('talller').collection('usuarios').updateOne({_id:new ObjectId(id)},{$set:{body}})
                        return result 
                    } catch (error) {
                        console.log(error)
                    }finally{
                        await client.close()
                    }
                    }
    
                    
    async updateMany(body){
        const client = new MongoClient(uri)
                try {
                    await client.connect()
                    const result = await client.db('talller').collection('usuarios').updateMany({},{$set:{body}})
                    return result 
                    } catch (e) {
                        console.log(e)
                    }finally{
                        await client.close()
                    }
                    }
    } 
    
    
    module.exports=usuarioupdate;