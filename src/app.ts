import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import httpStatus from "http-status-codes";
import globalRouter from "./routes";
import globalErrorHandler from "./middlewares/globalError";

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1", globalRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "API is running.",
  });
});

app.use(globalErrorHandler);

export default app;
