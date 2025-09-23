import { Router } from "express";
import { getPartido } from "../controllers/partidos-ucl.controller.js";

const router = Router();

router.get("/un-partido", getPartido);

export default router;
