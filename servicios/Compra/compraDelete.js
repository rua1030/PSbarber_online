const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const uri = 'mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';

class CompraDelete {
  constructor() {}

// Método para eliminar una compra por su ID
  async deleteOne(id) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const result = await client.db('taller').collection('compra').deleteOne({ _id: new ObjectId(id) });
      return result;
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }
 // Método para eliminar varias compras que coincidan con un criterio dado
  async deleteMany(body) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const result = await client.db('taller').collection('compra').deleteMany(body);
      return result;
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }
}

module.exports = CompraDelete;
