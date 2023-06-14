const {MongoClient,ObjectId}=require('mongodb')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'
//sevis pa un culo
class rolInsert{
    constructor(){}


    async insertMany(body){
        const client = new MongoClient(uri)
                try {
                    await client.connect()
                    const result = await client.db('taller').collection('rol').insertMany([body])
                return result
                } catch (error) {
                    console.log(error)
                }finally{
                    await client.close()
                }
                }
    }
    module.exports=rolInsert;