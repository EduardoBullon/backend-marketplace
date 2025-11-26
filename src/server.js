const app = require('./app');
const sequelize = require('./config/database');
const { User, Product, Category } = require('./models');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida');

        // Sync all models with database
        await sequelize.sync({ alter: true });
        console.log('Modelos sincronizados (User, Product, Category)');

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
};

startServer();
