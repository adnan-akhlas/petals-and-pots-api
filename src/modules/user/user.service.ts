import bcryptjs from "bcryptjs";
import httpStatus from "http-status-codes";
import createHttpError from "http-errors";
import env from "../../config/env";
import uploadToClodinary from "../../utils/uploadToCloudinary";
import { User } from "./user.model";
import { IRegisterUser, IUser } from "./user.types";

const insertUserIntoDb = async (
  userinfo: IRegisterUser,
  file: Express.Multer.File | undefined,
): Promise<Omit<IUser, "password" | "imagePublicId">> => {
  let imageUrl: string | null = null;
  let imagePublicId: string | null = null;

  const password = await bcryptjs.hash(
    userinfo.password,
    Number(env.BCRYPT_SALT),
  );

  if (file) {
    const uploadResult = await uploadToClodinary(file);
    imageUrl = uploadResult.secure_url;
    imagePublicId = uploadResult.public_id;
  }

  const newUser = await User.create({
    fullname: userinfo.fullname,
    email: userinfo.email,
    password,
    imageUrl: imageUrl,
    imagePublicId: imagePublicId,
  });

  const {
    password: pass,
    imagePublicId: publicId,
    ...safeUser
  } = newUser.toObject();

  return safeUser;
};

const getUserFromDb = async (email: string): Promise<IUser> => {
  const user = await User.findOne({ email }).select("-password -imagePublicId");

  if (!user) {
    const error = createHttpError(httpStatus.NOT_FOUND, "User not found");
    throw error;
  }
  return user;
};

export { insertUserIntoDb, getUserFromDb };
