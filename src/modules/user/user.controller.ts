import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import * as userService from "./user.service";

const registerUser = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const body = req.body;
    const file = req.file;
    const data = await userService.insertUserIntoDb(body, file);
    sendResponse(res, {
      status: httpStatus.CREATED,
      success: true,
      message: "User registered successfully.",
      data,
    });
  },
);

const getUser = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { email } = req.params;
    const data = await userService.getUserFromDb(email as string);
    sendResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: "User retrieved successfully",
      data,
    });
  },
);

export { registerUser, getUser };
