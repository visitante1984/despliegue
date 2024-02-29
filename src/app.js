//importar módulos necesarios
import express from 'express';
import ejs from 'ejs';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

//importar modulo de rutas
import indexRoutes from './routes/routes.js';
import { PORT } from './config.js';

const app = express();

//Configurar mi aplicacion reciba JSON
app.use(express.json());

//configurar el dirname

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

//configurar motor
app.set('view engine', 'ejs')
app.set('views', join (__dirname, 'views'));

//configurar indexRoutes para las rutas
app.use(indexRoutes);

app.use(express.static(join(__dirname, 'public')));
//crear un sercidor web
app.listen(PORT);
console.log('El servidor escucha  el puerto',PORT);
