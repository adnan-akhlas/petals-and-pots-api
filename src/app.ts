import express, { Application, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status-codes";
import globalRouter from "./routes";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", globalRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "API is running.",
  });
});

export default app;
