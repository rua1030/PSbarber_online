const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const uri = 'mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority';

class ProveedorDelete {
  constructor() {}

// Método para eliminar un proveedor por su ID
  async deleteOne(id) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const result = await client.db('taller').collection('proveedor').deleteOne({ _id: new ObjectId(id) });
      return result;
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }
 // Método para eliminar varios proveedores que coincidan con un criterio dado
  async deleteMany(body) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const result = await client.db('taller').collection('proveedor').deleteMany(body);
      return result;
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }
}

module.exports = ProveedorDelete;
