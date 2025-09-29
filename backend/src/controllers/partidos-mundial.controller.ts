import { type Request, type Response } from "express";
import * as PartidosMundialService from "../services/partidos-mundial.service.js";

export const getPartido = async (req: Request, res: Response) => {
  try {
    const partido = await PartidosMundialService.obtenerPartido();
    res.json(partido);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener partido" });
  }
};