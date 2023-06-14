const {MongoClient, ObjectId} = require('mongodb')
const bodyParser=require('body-parser');
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

class CompraInsertar{
 constructor(){}


//Metodo para insertar varias compras
async insertMany(body){
    
    const client=new MongoClient(uri)
   
    try {

        await client.connect();
        const result=await client.db('taller').collection('compra').insertMany([body]);
        return result;
    } catch (e) {
        console.error(e)
    }finally{
        await client.close();
    }
}


}

module.exports=CompraInsertar;