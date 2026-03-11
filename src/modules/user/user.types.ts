import { Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  password: string;
  imageUrl: string | null;
  isAdmin: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export type IRegisterUser = Pick<IUser, "fullname" | "email" | "password">;
