import { Router } from "express";
import { methods as ubicacionController } from "../controllers/ubicacion.controller.js";

const router = Router();

router.get("/", ubicacionController.getUbicaciones);
router.get("/:id", ubicacionController.getUbicacion);
router.post("/", ubicacionController.addUbicacion);
router.put("/:id_ubicacion", ubicacionController.updateUbicacion);
router.delete("/:id_ubicacion", ubicacionController.deleteUbicacion);

export default router;