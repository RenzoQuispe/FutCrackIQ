import express from "express";
import { register, login, logout, actualizarPerfil, check } from "../controllers/auth.controllers";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout)
router.put("/actualizarPerfil", actualizarPerfil);
router.get("/check",)

