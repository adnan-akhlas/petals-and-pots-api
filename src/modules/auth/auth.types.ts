import { IUser } from "../user/user.types";

export type TUserLogin = Pick<IUser, "email" | "password">;
