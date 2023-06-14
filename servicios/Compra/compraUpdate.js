const {MongoClient, ObjectId} = require('mongodb')
const bodyParser=require('body-parser');
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

class CompraUpdate{
 constructor(){}


//Metodo para actualizar una compra por su ID
async updateOne(id,body){
   
  
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const result = await client.db('taller').collection('compra').updateOne({
            _id: new ObjectId(id)
        },{
            $set:{
                body
                
            }});
        return result;
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }


}
//Metodo para actualizar varias compras
async updateMany(body){

    const client = new MongoClient(uri);
    try {
        await client.connect();
        const result = await client.db('taller').collection('compra').updateMany({

        },{
            $set:{
            body
            
        }});
        
       return result;
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

}

module.exports=CompraUpdate;