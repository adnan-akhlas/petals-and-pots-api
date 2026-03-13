import { Router } from "express";
import { userRouter } from "../modules/user/user.router";
import { authRouter } from "../modules/auth/auth.router";

const globalRouter: Router = Router();

const moduleRoutes = [
  {
    path: "/users",
    router: userRouter,
  },
  {
    path: "/auth",
    router: authRouter,
  },
];

moduleRoutes.forEach((module) => {
  globalRouter.use(module.path, module.router);
});

export default globalRouter;
