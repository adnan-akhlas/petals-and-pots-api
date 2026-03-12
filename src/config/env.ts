import "dotenv/config";

interface IENV {
  PORT: string;
  NODE_ENV: string;
  MONGO_URL: string;
  BCRYPT_SALT: string;
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
}

type KEY_ENV = keyof IENV;

const REQUIRED_ENV: KEY_ENV[] = [
  "PORT",
  "NODE_ENV",
  "MONGO_URL",
  "BCRYPT_SALT",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];

const checkEnv = (): IENV => {
  const env = {} as IENV;

  REQUIRED_ENV.forEach((key) => {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Missing required env: ${key}`);
    }
    env[key] = value;
  });

  return env;
};

const env = checkEnv();

export default env;
