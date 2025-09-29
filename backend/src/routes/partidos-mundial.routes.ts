import { Router } from "express";
import { getPartido } from "../controllers/partidos-mundial.controller.js";

const router = Router();

router.get("/un-partido", getPartido);

export default router;
