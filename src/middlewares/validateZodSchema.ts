import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

const validateZodSchema =
  (schema: ZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await schema.parseAsync(req.body);
      req.body = result;
      next();
    } catch (error: unknown) {
      next(error);
    }
  };

export default validateZodSchema;
