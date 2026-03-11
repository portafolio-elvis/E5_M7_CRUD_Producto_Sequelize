import { Sequelize } from 'sequelize';
import 'dotenv/config';

// Conexión a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

// Probar la conexión
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos PostgreSQL');
  } catch (error) {
    console.log('Error al conectar:', error.message);
  }
};

export default sequelize;
