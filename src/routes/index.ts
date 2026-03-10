import { Router } from "express";
import { userRouter } from "../modules/user/user.router";

const globalRouter: Router = Router();

const moduleRoutes = [
  {
    path: "/users",
    router: userRouter,
  },
];

moduleRoutes.forEach((module) => {
  globalRouter.use(module.path, module.router);
});

export default globalRouter;
