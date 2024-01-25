import { Router } from "express";
import { getEmpleado,getEmpleados, deleteEmpleado,updateEmpleado,createEmpleado } from "../controllers/empleados.controller.js";

const router = Router();


router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getEmpleado)
router.post('/empleados',createEmpleado)
router.patch('/empleados/:id',updateEmpleado)
router.delete('/empleados/:id',deleteEmpleado)
console.log('El servidor corriendo en el puerto 3000! :D ')

export default router;