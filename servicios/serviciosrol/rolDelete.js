const {MongoClient,ObjectId}=require('mongodb')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'
//servis pa un culo
class rolDelete{
    constructor(){}


    async deleteMany(body){
        
                        
         //Funcion asincronica - mandar id
    const client = new MongoClient(uri)
                           
        try {
            await client.connect()
            const result = await client.db('taller').collection('rol').deleteMany(body)
                return result     
                
        }catch (e) {
                console.log(e)
        }finally{
                await client.close()
                            }
                            }
         
    async deleteOne(id){
    
        const client = new MongoClient(uri);
                try {
            await client.connect();
                const result = await client.db('taller').collection('rol').deleteOne({_id: new ObjectId(id)});
                return result;
                }catch(e){
                        console.log(e);
                }finally{
                        await client.close();
                      }
                           
            }                            
    



    }

    module.exports=rolDelete;

