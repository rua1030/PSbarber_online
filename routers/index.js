const resprol = require('./Router.js')
const resppermiso = require('./Routerpermiso.js')
const respusuario = require('./Routerusuarios.js')
const resclient = require('./routesCliente');
const resventa = require('./routesVenta');
const resservicio = require('./routesServicio');
const reshorario = require('./routesHorario');
const resproducto = require('./routesProducto.js')
const resproveedor = require('./routesProveedor.js')
const rescompra = require('./routesCompra.js')
function responseApi(app){
app.use('/compra',rescompra)
app.use('/proveedor',resproveedor)
app.use('/producto',resproducto)    
app.use('/rol', resprol)
app.use('/permiso', resppermiso)
app.use('/usuarios',respusuario)
app.use('/cliente', resclient);
app.use('/venta', resventa);
app.use('/servicio',resservicio);
app.use('/horario',reshorario);
}




module.exports = responseApi;
