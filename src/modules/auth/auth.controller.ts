import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { setCookie } from "../../utils/cookie";
import sendResponse from "../../utils/sendResponse";
import * as authService from "./auth.service";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const data = await authService.loginUser(body);

  setCookie(res, "access_token", data);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User logged in successfully.",
    data,
  });
});

export { loginUser };
