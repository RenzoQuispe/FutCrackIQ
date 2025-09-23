import { type Request, type Response } from "express";
import * as PartidosUCLService from "../services/partidos-ucl.service.js";

export const getPartido = async (req: Request, res: Response) => {
  try {
    const partido = await PartidosUCLService.obtenerPartido();
    res.json(partido);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener partido" });
  }
};