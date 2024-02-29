import { Router } from 'express';
import { home } from '../controllers/controllers.js';
const router = Router();


//Definir rutas
router.get('/', home);

export default router;