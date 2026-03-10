import { Router } from "express";
import * as userController from "./user.controller";

const router = Router();

router.post("/", userController.registerUser);

export const userRouter: Router = router;
