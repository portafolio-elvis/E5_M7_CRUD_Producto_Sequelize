import sequelize from './database.js';
import { DataTypes } from 'sequelize';

// Modelo Producto
const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Producto;
