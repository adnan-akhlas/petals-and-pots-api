import { UploadApiResponse } from "cloudinary";
import cloudinary from "../libs/cloudinary";
import path from "node:path";
import fs from "node:fs/promises";

const uploadToClodinary = async (
  file: Express.Multer.File,
): Promise<UploadApiResponse> => {
  try {
    const filePath = path.join(
      __dirname,
      "../../public/data/uploads",
      file.filename,
    );
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
      unique_filename: true,
      folder: "petals-and-pots",
      format: "webp",
      overwrite: false,
    });

    await fs.unlink(filePath);
    return uploadResult;
  } catch (error: unknown) {
    console.error("cloudinary", error);
    throw error;
  }
};

export default uploadToClodinary;
