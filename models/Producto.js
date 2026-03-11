import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

// Definición del modelo Producto
const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'El nombre no puede estar vacío'
      }
    }
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: {
        msg: 'El precio debe ser un número'
      },
      min: {
        args: [0],
        msg: 'El precio debe ser mayor o igual a 0'
      }
    }
  }
}, {
  tableName: 'productos',
  timestamps: false
});

export default Producto;
