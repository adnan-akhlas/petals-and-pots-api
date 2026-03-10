import env from "../../config/env";
import { User } from "./user.model";
import bcryptjs from "bcryptjs";
import { IRegisterUser, IUser } from "./user.types";

const insertUserIntoDb = async (userinfo: IRegisterUser): Promise<IUser> => {
  const password = await bcryptjs.hash(
    userinfo.password,
    Number(env.BCRYPT_SALT),
  );
  const newUser = await User.create({
    fullname: userinfo.fullname,
    email: userinfo.email,
    password,
  });
  return newUser;
};

export { insertUserIntoDb };
