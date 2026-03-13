import createHttpError from "http-errors";
import httpStatus from "http-status-codes";
import jwt, { SignOptions } from "jsonwebtoken";
import env from "../../config/env";
import { User } from "../user/user.model";
import { TUserLogin } from "./auth.types";
import { generateBearerToken } from "../../utils/jwt";

const loginUser = async (userInfo: TUserLogin): Promise<string> => {
  const user = await User.findOne({ email: userInfo.email });
  if (!user) {
    const error = createHttpError(
      httpStatus.NOT_FOUND,
      "Request user not found.",
    );
    throw error;
  }
  const userToken = {
    name: user.fullname,
    email: user.email,
    isAdmin: user.isAdmin,
  };

  const token = generateBearerToken(
    userToken,
    env.JWT_ACCESS_SECRET,
    env.JWT_ACCESS_EXPIRED,
  );

  return token;
};

export { loginUser };
