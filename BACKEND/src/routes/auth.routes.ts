import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware";
import * as UserController from "../controllers/auth.controller";

const router = Router();

router.post("/cadastro", UserController.cadastro);
router.post("/login", UserController.login);
router.get("/profile", requireAuth, UserController.profile);

export default router;
