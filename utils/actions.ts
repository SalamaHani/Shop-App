"use server";
import axios from "axios";
import db from "./db";
import { hashPassword, verifyPassword } from "@/app/auth/hash";
import { generateToken } from "@/app/auth/Token";
import { registerSchema, loginSchemae, FormState } from "./schema";
const productionUrl = "https://shop.motorscloud.net/api";
import { cookies } from "next/headers";

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
      const errors = resultvaled.error.errors.map((error) => error.message);
      throw new Error(errors.join("&"));
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
    return { message: "Sucsseflly Regester" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};
//log in user
export const loginUser = async (prevState: FormState, formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const resultvaled = loginSchemae.safeParse({ email, password });
    if (!resultvaled.success) {
      const errors = resultvaled.error.errors.map((error) => error.message);
      throw new Error(errors.join("&"));
    }
    const user = await db.user.findUnique({ where: { email } });
    if (!user || !(await verifyPassword(password, user.password))) {
      throw new Error("Invalid email or password");
    }
    const cooceisues = await cookies();
    cooceisues.set("token", user.id, { path: "/", httpOnly: true });
    return { message: "Sucsseflly Log in" };
  } catch (error) {
    return renderError(error);
  }
};
