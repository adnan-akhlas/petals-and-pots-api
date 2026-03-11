import env from "../../config/env";
import { User } from "./user.model";
import bcryptjs from "bcryptjs";
import { IRegisterUser, IUser } from "./user.types";
import uploadToClodinary from "../../utils/uploadToCloudinary";

const insertUserIntoDb = async (
  userinfo: IRegisterUser,
  file: Express.Multer.File | undefined,
): Promise<IUser> => {
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
  return newUser;
};

export { insertUserIntoDb };
