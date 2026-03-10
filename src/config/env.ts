import "dotenv/config";

interface IENV {
  PORT: string;
  MONGO_URL: string;
  BCRYPT_SALT: string;
}

type KEY_ENV = keyof IENV;

const REQUIRED_ENV: KEY_ENV[] = ["PORT", "MONGO_URL", "BCRYPT_SALT"];

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
