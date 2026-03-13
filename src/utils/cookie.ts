import { Response } from "express";

export function setCookie(res: Response, name: string, value: string): void {
  res.cookie(name, value, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
}

export function clearCookie(res: Response, name: string): void {
  res.clearCookie(name, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
}
