import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import DB from './conection.js';
import userRoutes from './routers/userRoutes.js';
import houseRoutes from './routers/homeroutes.js'

dotenv.config();

const __filename = path.resolve();
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

DB.connectDB(process.env.DB_URI);

// Definir tus rutas aquí
app.use('/users', userRoutes);
app.use('/houses', houseRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
