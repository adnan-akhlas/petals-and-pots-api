import { Router } from "express";
import * as userController from "./user.controller";
import upload from "../../config/multer";

const router = Router();

router.post("/", upload.single("image"), userController.registerUser);

export const userRouter: Router = router;
