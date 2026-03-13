import jwt, { SignOptions } from "jsonwebtoken";

export function getJwtToken(
  data: any,
  secret: string,
  expired: string,
): string {
  const token = jwt.sign(data, secret, { expiresIn: expired } as SignOptions);
  return `Bearer ${token}`;
}
