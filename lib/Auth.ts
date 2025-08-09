import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
import { cache } from "react";
const secretKey = "secret";
import db from "@/utils/db";
import { z } from "zod";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
const key = new TextEncoder().encode(secretKey);
const SESSION_EXPIRATION_SECONDS = 60 * 60 * 24 * 7;
const COOKIE_SESSION_KEY = "session-id";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function encrypt(payload: any) {
  const safeData = JSON.parse(
    JSON.stringify(payload, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
  return await new SignJWT(safeData)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(Date.now() + SESSION_EXPIRATION_SECONDS * 1000)
    .sign(key);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sessionSchema = z.object({
  id: z.string(),
});
type UserSession = z.infer<typeof sessionSchema>;
export type Cookies = {
  set: (
    key: string,
    value: string,
    options: {
      secure?: boolean;
      httpOnly?: boolean;
      sameSite?: "strict" | "lax";
      expires?: number;
    }
  ) => void;
  get: (key: string) => { name: string; value: string } | undefined;
  delete: (key: string) => void;
};
//set cookise prorser
function setCookie(sessionId: string, cookies: Pick<Cookies, "set">) {
  cookies.set(COOKIE_SESSION_KEY, sessionId, {
    httpOnly: true,
    sameSite: "lax",
    expires: Date.now() + SESSION_EXPIRATION_SECONDS * 1000,
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(COOKIE_SESSION_KEY)?.value;
  console.log(sessionId);
  if (sessionId == null) return null;
  return await decrypt(sessionId);
}
//get cookise session
export function getUserFromSession(cookies: Pick<Cookies, "get">) {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value;
  if (sessionId == null) return null;
  return decrypt(sessionId);
}

// export const verifySession = async () => {
//   const session = await getSession();
//   if (!session?.userId) {
//     redirect("/login");
//   }
//   return { isAuth: true, userId: session.userId };
// };
//get User Data varfiy session
export const getUser = cache(async () => {
  const session = await getSession();
  if (session == null) return null;
  try {
    const data = await db.users.findUnique({
      where: {
        id: session.userId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    console.log("Failed to fetch user");
    return null;
  }
});
///remove User Session logout
export async function removeUserFromSession(
  cookies: Pick<Cookies, "get" | "delete">
) {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value;
  if (sessionId == null) return null;
  cookies.delete(COOKIE_SESSION_KEY);
}
//create Session this User login || regersetr
export async function createSession(
  userId: UserSession,
  cookies: Pick<Cookies, "set">
) {
  const sessionId = await encrypt(userId);
  setCookie(sessionId, cookies);
}
///update UserS ession is cookise
export async function updateUserSessionExpiration(
  cookies: Pick<Cookies, "get" | "set">
) {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value;
  if (sessionId == null) return null;
  setCookie(sessionId, cookies);
}
///
