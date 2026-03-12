import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import env from "../config/env";
import z, { ZodError } from "zod";
import { HttpError } from "http-errors";

const globalErrorHandler = (
  error: Error | ZodError | HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  let status = httpStatus.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";
  let errorDetails = error;
  let errorStack = error.stack;

  if (error instanceof HttpError) {
    status = error.status;
    message = error.message;
  }

  if (error instanceof ZodError) {
    status = httpStatus.BAD_REQUEST;
    message = error.name;
    errorDetails = z.flattenError(error).fieldErrors as ZodError<unknown>;
  }

  res.status(status).json({
    success: false,
    message,
    error: errorDetails,
    ...(env.NODE_ENV === "development" && { stack: errorStack }),
  });
};

export default globalErrorHandler;
