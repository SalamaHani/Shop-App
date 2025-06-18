// auth/hash.ts
import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(
  inputPassword: string,
  hashedPassword: string
) {
  return bcrypt.compare(inputPassword, hashedPassword);
}
