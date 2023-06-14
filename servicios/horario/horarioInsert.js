const { MongoClient, ObjectId } = require('mongodb');
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';

class horarioInsert{
    constructor(){}

    async insertManyHorario(body){
    
        const client=new MongoClient(uri)
       
        try {
            await client.connect();
            const result=await client.db('taller').collection('Horario').insertMany([body]);
            return result;
        } catch (e) {
            console.error(e)
        }finally{
            await client.close();
        }
    }
}

module.exports = horarioInsert;