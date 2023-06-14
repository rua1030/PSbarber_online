const {MongoClient,ObjectId}=require('mongodb')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';

class horarioFind{
    constructor(){}


    async findHorario(){
        const client = new MongoClient(uri)
    
        try {
            await client.connect()
            const result = await client.db('taller').collection('Horario').find({}).toArray();
         return result;
        } catch (e) {
            console.error(e)
        }finally{
            await client.close()
        }
    }
    async findOneHorario(id){
        const client = new MongoClient(uri)
        try {
            await client.connect()
            const result = await client.db('taller').collection('Horario').findOne({"_id":new ObjectId(id)})
        return result;
        } catch (e) {
            console.error(e)
        }finally{
            await client.close()
        }
}
}

module.exports = horarioFind;