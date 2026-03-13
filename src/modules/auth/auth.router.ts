import { Router } from "express";
import * as authController from "../auth/auth.controller";

const router: Router = Router();

router.post("/login", authController.loginUser);

export { router as authRouter };
