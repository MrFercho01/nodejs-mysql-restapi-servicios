import { Router } from "express";
import { methods as mesaController } from "../controllers/mesa.controller.js";

const router = Router();

router.get("/", mesaController.getMesas);
router.get("/:id", mesaController.getMesa);
router.post("/", mesaController.addMesa);
router.put("/:id", mesaController.updateMesa);
router.delete("/:id", mesaController.deleteMesa)

export default router;