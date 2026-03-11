import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import * as userService from "./user.service";

const registerUser = catchAsync(async (req: Request, res: Response) => {
  console.log("files", req.file);
  console.log("body", req.body);
  // const data = await userService.insertUserIntoDb(body);
  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "User registered successfully.",
    data: null,
  });
});

export { registerUser };
