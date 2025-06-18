// auth/token.ts
import jwt, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "default_secret";

export interface JwtPayload {
  email: string;
}

export function generateToken(
  payload: any,
  expiresIn: string | number = "1h"
): string {
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function verifyJwt(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, SECRET) as JwtPayload;
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      console.error("JWT expired");
    } else if (err instanceof JsonWebTokenError) {
      console.error("JWT invalid");
    } else {
      console.error("Unknown JWT error", err);
    }
    return null;
  }
}
