import { Router } from "express";
import { methods as empleadoController } from "../controllers/empleado.controller.js";

const router = Router();

router.get("/", empleadoController.getEmpleados);
router.get("/:id", empleadoController.getEmpleado);
router.post("/", empleadoController.addEmpleado);
router.put("/:id", empleadoController.updateEmpleado);
router.delete("/:id", empleadoController.deleteEmpleado);

export default router;