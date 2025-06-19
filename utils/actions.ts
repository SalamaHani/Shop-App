"use server";
import axios from "axios";
import db from "./db";
import { hashPassword, verifyPassword } from "@/lib/hash";
import { generateToken } from "@/lib/Token";
import { registerSchema, loginSchemae, FormState } from "./schema";
import { encrypt } from "@/lib/Auth";
import { cookies } from "next/headers";
const productionUrl = "https://shop.motorscloud.net/api";
import { redirect } from "next/navigation";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
const renderError = (error: unknown): { message: string } => {
  // console.log(error);
  return {
    message: error instanceof Error ? error.message : "an error occurred",
  };
};
export const fetchAllProducts = async ({ Parmes = "" }: { Parmes: string }) => {
  const respones = await customFetch.get(`/products/${Parmes}`);
  return respones.data;
};
export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  return product;
};
export const fetchallproductsdb = async ({
  Parmes = "",
}: {
  Parmes: string;
}) => {
  console.log(Parmes);
  const products = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: Parmes, mode: "insensitive" } },
        { company: { contains: Parmes, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};
export const fatchFutrerProduct = async () => {
  const product = await db.product.findMany();
  return product;
};
//regestier user function auth
export const RegesterUser = async (
  prevState: FormState,
  formData: FormData
) => {
  try {
    // const rawData = Object.fromEntries(formData);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const resultvaled = registerSchema.safeParse({ email, password, name });
    if (!resultvaled.success) {
      // return {
      //   errors: resultvaled.error.flatten().fieldErrors,
      // };
      const errors = resultvaled.error.errors.map((error) => error.message);
      throw new Error(errors.join("*"));
    }

    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await hashPassword(password);
    const Token = generateToken({ email: email });
    await db.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
        token: Token,
      },
    });
    redirect("/login");
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};
//log in user funcrion auth
export const loginUser = async (prevState: FormState, formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const resultvaled = loginSchemae.safeParse({ email, password });
    if (!resultvaled.success) {
      const errors = resultvaled.error.errors.map((error) => error.message);
      throw new Error(errors.join("*"));
    }
    const user = await db.user.findUnique({ where: { email } });
    if (!user || !(await verifyPassword(password, user.password))) {
      throw new Error("Invalid email or password");
    }
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ email });
    // Save the session in a cookie
    (
      await // Save the session in a cookie
      cookies()
    ).set("session", session, { expires, httpOnly: true });
    redirect("/");
  } catch (error) {
    return renderError(error);
  }
};
//log out functhin Auth
export const logout = async () => {
  // Destroy the session
  (
    await // Destroy the session
    cookies()
  ).set("session", "", { expires: new Date(0) });
  redirect("/");
};
