import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

export function generateBearerToken(
  data: any,
  secret: string,
  expired: string,
): string {
  const token = jwt.sign(data, secret, { expiresIn: expired } as SignOptions);
  return `Bearer ${token}`;
}

export function verifyToken(
  token: string,
  secret: string,
): string | JwtPayload {
  const decode = jwt.verify(token, secret);
  return decode;
}
