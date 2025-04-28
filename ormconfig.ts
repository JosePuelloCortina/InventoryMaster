import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'admin321',
    database: process.env.DB_NAME || 'betweenlinesdb',
    entities: [],
    synchronize: true,  // No utilizar en producción
    logging: false,
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });