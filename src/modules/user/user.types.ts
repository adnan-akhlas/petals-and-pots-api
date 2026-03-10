import { Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}
