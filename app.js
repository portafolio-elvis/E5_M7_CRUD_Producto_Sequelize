import sequelize, { testConnection } from './database.js';
import Producto from './Producto.js';

// Crear producto
const crearProducto = async (nombre, precio) => {
  const nuevoProducto = await Producto.create({
    nombre: nombre,
    precio: precio
  });
  console.log('Producto creado:', nuevoProducto.toJSON());
};

// Leer todos los productos
const obtenerProductos = async () => {
  const productos = await Producto.findAll();
  console.log('Productos:', productos.length);
  productos.forEach(p => {
    console.log(`${p.id} - ${p.nombre} - $${p.precio}`);
  });
};

// Buscar producto por ID
const buscarProducto = async (id) => {
  const producto = await Producto.findByPk(id);
  if (producto) {
    console.log('Encontrado:', producto.nombre);
  } else {
    console.log('No encontrado');
  }
};

// Actualizar producto
const actualizarProducto = async (id, precio) => {
  await Producto.update({ precio: precio }, {
    where: { id: id }
  });
  console.log('Producto actualizado');
};

// Eliminar producto
const eliminarProducto = async (id) => {
  await Producto.destroy({
    where: { id: id }
  });
  console.log('Producto eliminado');
};

// Función principal
const main = async () => {
  // Probar conexión
  await testConnection();
  
  // Sincronizar base de datos
  await sequelize.sync();
  console.log('Base de datos sincronizada\n');
  
  // Crear productos
  console.log('--- CREAR PRODUCTOS ---');
  await crearProducto('Laptop', 350990);
  await crearProducto('Mouse', 29000);
  await crearProducto('Teclado', 35000);
  console.log();
  
  // Leer productos
  console.log('--- LEER PRODUCTOS ---');
  await obtenerProductos();
  console.log();
  
  // Buscar producto
  console.log('--- BUSCAR PRODUCTO ---');
  await buscarProducto(1);
  console.log();
  
  // Actualizar producto
  console.log('--- ACTUALIZAR PRODUCTO ---');
  await actualizarProducto(1, 300000);
  console.log();
  
  // Eliminar producto
  console.log('--- ELIMINAR PRODUCTO ---');
  await eliminarProducto(2);
  console.log();
  
  // Ver productos finales
  console.log('--- PRODUCTOS FINALES ---');
  await obtenerProductos();
};

main();
