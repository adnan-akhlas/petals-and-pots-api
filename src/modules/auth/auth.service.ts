import createHttpError from "http-errors";
import httpStatus from "http-status-codes";
import jwt, { SignOptions } from "jsonwebtoken";
import env from "../../config/env";
import { User } from "../user/user.model";
import { TUserLogin } from "./auth.types";

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

  const token = `Bearer ${jwt.sign(userToken, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRED,
  } as SignOptions)}`;

  return token;
};

export { loginUser };
