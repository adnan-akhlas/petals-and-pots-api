import { model, Schema } from "mongoose";
import { IUser } from "./user.types";

const userSchema = new Schema<IUser>(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      nullable: true,
      default: null,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

export const User = model("User", userSchema);
