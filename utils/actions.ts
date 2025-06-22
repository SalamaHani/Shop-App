"use server";
import axios from "axios";
import db from "./db";
import { hashPassword, verifyPassword } from "@/lib/hash";
import { registerSchema, loginSchemae, FormState } from "./schema";
import { createSession, encrypt, removeUserFromSession } from "@/lib/Auth";

const productionUrl = "https://shop.motorscloud.net/api";
import { cookies } from "next/headers";
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

export const addToCartAction = async () => {};
export const toggleFavoriteAction = async (prevState: FormState, formData: FormData) => {
  const productId = formData.get('productId') as string
  const 
  try{
    
  }catch(error){
    return renderError(error)
  }
};
export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
  const favoreit = await db.favorite.findFirst({
    where: {
      productId,
    },
    select: {
      id: true,
    },
  });
  return favoreit?.id || null;
};

//Authntcation Users

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

    const existingUser = await db.users.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await hashPassword(password);
    const Token = await encrypt({ email: email });
    const user = await db.users.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
        token: Token,
      },
    });
    await createSession(user, await cookies());
    return { message: "Login suacssfly" };
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
    const user = await db.users.findUnique({ where: { email } });
    if (!user || !(await verifyPassword(password, user.password))) {
      throw new Error("Invalid email or password");
    }
    await createSession(user, await cookies());
    return { message: "Login suacssfly" };
  } catch (error) {
    return renderError(error);
  }
};
//log out functhin Auth
export async function logout() {
  await removeUserFromSession(await cookies());
  redirect("/");
}
