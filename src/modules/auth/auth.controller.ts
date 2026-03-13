import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import * as authService from "./auth.service";
import env from "../../config/env";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const data = await authService.loginUser(body);

  res.cookie("access_token", data, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
  });

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User logged in successfully.",
    data,
  });
});

export { loginUser };
