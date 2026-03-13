import { Router } from "express";
import * as userController from "./user.controller";
import upload from "../../config/multer";
import validateZodSchema from "../../middlewares/validateZodSchema";
import { registerUserZodSchema } from "./user.zod";

const router: Router = Router();

router.get("/:email", userController.getUser);
router.post(
  "/",
  upload.single("image"),
  validateZodSchema(registerUserZodSchema),
  userController.registerUser,
);

export { router as userRouter };
