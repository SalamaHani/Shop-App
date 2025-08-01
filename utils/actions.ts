"use server";
import axios from "axios";
import db from "./db";
import { comparePasswords, generateSalt, hashPassword } from "@/lib/hash";
import {
  validateWithZodSchema,
  reviewSchema,
  checkoutSchema,
  LoginFormSchema,
  SignupFormSchema,
  UbdeatUserSchema,
  changePasswordSchema,
  updateProductSchema,
  updateProductSchemaoning,
} from "./schema";
import {
  createSession,
  encrypt,
  getUserFromSession,
  removeUserFromSession,
} from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const productionUrl = "https://shop.motorscloud.net/api";
import { cookies } from "next/headers";
import { Cart } from "@prisma/client";
import {
  ActionChangePass,
  ActionResponRegester,
  ActionResponse,
  ActionResponseere,
  ActionResponsUpdeat,
  ActionUpdeatproduct,
  UserFormData,
} from "./Type";
import { toast } from "sonner";
import { deleteImage, uploadImage } from "./supabase";
import { console } from "inspector";
export const customFetch = axios.create({
  baseURL: productionUrl,
});
///handelar error re rednder react js and next js
const renderError = (error: unknown): { message: string } => {
  // console.log(error);
  return {
    message: error instanceof Error ? error.message : "an error occurred",
  };
};
//fetching product//
//fetch Singel peoduct
export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  return product;
};
//fetch All product and pagination product
export const fetchallproductsdb = async ({
  Parmes = "",
  Page = 1,
}: {
  Parmes: string;
  Page: number;
}) => {
  console.log(Parmes);
  const limet = 6;
  const gnoer = (Page - 1) * limet;
  const total = await db.product.count();
  const totalPage = Math.ceil(total / limet);
  const metadata = { total, totalPage };
  const products = await db.product.findMany({
    skip: gnoer,
    take: limet,
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

  return { products, metadata };
};
//fetch futer prudeat filter
export const fatchFutrerProduct = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};
//fetch product ID
const fetchProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
//include product reashen
const includeProductClause = {
  cartItems: {
    include: {
      product: true,
    },
  },
};
export const fetchOrCreateCart = async ({
  userID,
  errorOnFailure = false,
}: {
  userID: string;
  errorOnFailure?: boolean;
}) => {
  let cart = await db.cart.findFirst({
    where: {
      userId: userID,
    },
    include: includeProductClause,
  });
  if (!cart && errorOnFailure) {
    // return { success: false, message: "Cart not found" };
    throw new Error("Cart not found");
  }
  if (!cart) {
    cart = await db.cart.create({
      data: {
        userId: userID,
      },
      include: includeProductClause,
    });
  }
  return cart;
};
const updateOrCreateCartItem = async ({
  productId,
  cartId,
  amount,
}: {
  productId: string;
  cartId: string;
  amount: number;
}) => {
  let cartItem = await db.cartItem.findFirst({
    where: {
      productId,
      cartId,
    },
  });
  console.log(cartItem);
  if (cartItem != null) {
    cartItem = await db.cartItem.update({
      where: {
        id: cartItem.id,
      },
      data: {
        amount: cartItem.amount + amount,
      },
    });
  } else {
    cartItem = await db.cartItem.create({
      data: { amount, productId, cartId },
    });
  }
};
export const updateCart = async (cart: Cart) => {
  const cartItems = await db.cartItem.findMany({
    where: {
      cartId: cart.id,
    },
    include: {
      product: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  let numItemsInCart = 0;
  let cartTotal = 0;

  for (const item of cartItems) {
    numItemsInCart += item.amount;
    cartTotal += item.amount * item.product.price;
  }
  const tax = cart.taxRate * cartTotal;
  const shipping = cartTotal ? cart.shipping : 0;
  const orderTotal = cartTotal + tax + shipping;
  const currentCart = await db.cart.update({
    where: {
      id: cart.id,
    },
    data: {
      numItemsInCart,
      cartTotal,
      tax,
      orderTotal,
    },
  });
  return { cartItems, currentCart };
};
export const addToCartAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) => {
  const user = await getUserFromSession(await cookies());
  if (user == null) return redirect("login");
  const productId = formData.get("productId") as string;
  const amount = Number(formData.get("amount"));
  const pathname = formData.get("pathname") as string;
  try {
    const products = await fetchProduct(productId);
    console.log(products);
    const cart = await fetchOrCreateCart({ userID: user.id });
    await updateOrCreateCartItem({ productId, cartId: cart.id, amount });
    await updateCart(cart);
    revalidatePath(pathname);
    return { message: "added to cart" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};
export const removeCartItemAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) => {
  const user = await getUserFromSession(await cookies());
  try {
    const cartItemId = formData.get("id") as string;
    const cart = await fetchOrCreateCart({
      userID: user.id,
      errorOnFailure: true,
    });
    await db.cartItem.delete({
      where: {
        id: cartItemId,
        cartId: cart.id,
      },
    });
    await updateCart(cart);
    revalidatePath("/cart");
    return { message: "cart Delete" };
  } catch (error) {
    return renderError(error);
  }
};
export const updateCartItemAction = async ({
  amount,
  cartItemId,
}: {
  amount: number;
  cartItemId: string;
}) => {
  const user = await getUserFromSession(await cookies());
  try {
    const cart = await fetchOrCreateCart({ userID: user.id });
    await db.cartItem.update({
      where: {
        id: cartItemId,
        cartId: cart.id,
      },
      data: {
        amount,
      },
    });
    await updateCart(cart);
    revalidatePath("/cart");
    return { message: "cart updated" };
  } catch (error) {
    return renderError(error);
  }
};
export const fetchCartItems = async () => {
  const user = await getUserFromSession(await cookies());
  if (user == null) return 0;
  const cart = await db.cart.findFirst({
    where: {
      userId: user?.id ?? "",
    },
    select: {
      numItemsInCart: true,
    },
  });
  return cart?.numItemsInCart || 0;
};
export const fetchCartItemtest = async () => {
  const user = await getUserFromSession(await cookies());
  try {
    await db.cart.findFirst({
      where: {
        userId: user?.id ?? "",
      },
      select: {
        numItemsInCart: true,
      },
    });
  } catch (error) {
    renderError(error);
  }
  redirect("/checkout");
};
/// User Oreder products
export const createOrderAction = async (UserData: UserFormData) => {
  console.log(UserData);
  let orderId: null | string = null;
  let cartId: null | string = null;
  const user = await getUserFromSession(await cookies());
  try {
    const cart = await fetchOrCreateCart({
      userID: user.id,
      errorOnFailure: true,
    });
    cartId = cart.id;
    await db.order.deleteMany({
      where: {
        userId: user.id,
        isPaid: false,
      },
    });
    const order = await db.order.create({
      data: {
        userId: user.id,
        products: cart.numItemsInCart,
        orderTotal: cart.orderTotal,
        tax: cart.tax,
        shipping: cart.shipping,
        email: UserData.email,
        city: UserData.Town,
        streetAddress: UserData.StreetAddress,
        phone: UserData.Phone,
        status: "pending",
      },
    });
    orderId = order.id;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Please fix the errors in the form" };
  }
  redirect(`/payment?orderId=${orderId}&cartId=${cartId}`);
};

export const getdataformAction = async (
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const UserData: UserFormData = {
    FirstName: formData.get("FirstName") as string,
    LastName: formData.get("LastName") as string,
    StreetAddress: Number(formData.get("StreetAddress")),
    Town: formData.get("Town") as string,
    ZIPCode: Number(formData.get("ZIPCode")),
    email: formData.get("email") as string,
    Phone: Number(formData.get("Phone")),
  };
  // Validate the form data
  const validatedData = checkoutSchema.safeParse(UserData);
  if (!validatedData.success) {
    return {
      success: false,
      Data: {
        FirstName: UserData.FirstName,
        LastName: UserData.LastName,
        StreetAddress: UserData.StreetAddress,
        Town: UserData.Town,
        ZIPCode: UserData.ZIPCode,
        email: UserData.email,
        Phone: UserData.Phone,
      },
      message: "Please fix the errors in the form",
      errors: validatedData.error.flatten().fieldErrors,
    };
  }
  return (
    (await createOrderAction(UserData)) || {
      success: true,
      message: "saved successfully!",
    }
  );
};
export const fetchOrderUser = async () => {
  const user = await getUserFromSession(await cookies());
  const order = await db.order.findMany({
    where: {
      userId: user.id,
      isPaid: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return order;
};

///Favorite PRODUCTS Action
export const toggleFavoriteAction = async (prevState: {
  productId: string;
  favoriteId: string | null;
  pathname: string;
}) => {
  const user = await getUserFromSession(await cookies());
  const { productId, favoriteId, pathname } = prevState;

  if (user == null) return redirect("/login");
  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          productId,
          userId: user.id,
        },
      });
    }
    revalidatePath(pathname);
    return { message: favoriteId ? "removed from faves" : "added to faves" };
  } catch (error) {
    return renderError(error);
  }
};
export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
  const user = await getUserFromSession(await cookies());
  if (user == null) return null;
  const favoreit = await db.favorite.findFirst({
    where: {
      productId,
      userId: user.id,
    },
    select: {
      id: true,
    },
  });
  return favoreit?.id || null;
};
export const fetchUserFavorites = async () => {
  const user = await getUserFromSession(await cookies());
  const faveretproduct = await db.favorite.findMany({
    where: {
      userId: user.id,
    },
    include: {
      product: true,
    },
  });
  return faveretproduct;
};

///Product Rating
export const fetchProductRating = async (productId: string) => {
  const result = await db.review.groupBy({
    by: ["productId"],
    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
    _sum: {
      rating: true,
    },
    where: { productId },
  });
  console.log(result);
  return {
    rating: result[0]?._avg.rating?.toFixed(1) ?? 0,
    count: result[0]?._count.rating ?? 0,
  };
};
///rating summary product

export const ratingSummary = async (productId: string) => {
  const total = await db.review.count({
    where: { productId },
  });

  const grouped = await db.review.groupBy({
    by: ["rating"],
    where: { productId },
    _count: true,
    orderBy: {
      rating: "asc",
    },
  });
  const ratingBreakdown = [
    { stars: 5, count: 0, percentage: 0 },
    { stars: 4, count: 0, percentage: 0 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ];
  const result = grouped.map((item) => ({
    stars: item.rating,
    count: item._count,
    percentage: total > 0 ? item._count / 2 : 0,
  }));
  // const nerar = [
  //   { stars: 5, count: 5, percentage: 100},
  //   { stars: 3, count: 1, percentage: 3}
  // ]
  ratingBreakdown.map((item) => {
    result.map((itemin) => {
      if (itemin.stars == item.stars) {
        item.count = itemin.count;
        item.percentage = itemin.percentage;
      }
    });
  });
  if (result.length == 0) return ratingBreakdown;
  return ratingBreakdown;
};

///Product Reviews
export const fetchProductReviews = async (productId: string) => {
  const reviews = await db.review.findMany({
    where: {
      productId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return reviews;
};

export const createReviewAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) => {
  const user = await getUserFromSession(await cookies());
  try {
    const rawData = Object.fromEntries(formData);
    console.log(rawData);
    const validatedFields = validateWithZodSchema(reviewSchema, rawData);
    await db.review.create({
      data: {
        ...validatedFields,
        userId: user.id,
      },
    });
    revalidatePath(`/products/${validatedFields.productId}`);
    return { message: "review submitted successfully" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};
export async function getProductById(id: string) {
  try {
    const product = await db.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  } catch (error) {
    console.error("getProductById error:", error);
    throw new Error("Failed to fetch product");
  }
}
export const fetchProductReviewsByUser = async () => {
  const user = await getUserFromSession(await cookies());
  const reviews = await db.review.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      authorName: true,
      product: {
        select: {
          image: true,
          name: true,
        },
      },
    },
  });
  return reviews;
};
export const deleteReview = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) => {
  const reviewId = formData.get("reviewId") as string;
  const user = await getUserFromSession(await cookies());
  try {
    await db.review.delete({
      where: {
        id: reviewId,
        userId: user.id,
      },
    });
    revalidatePath("/reviews");
    return { message: "review deleted successfully" };
  } catch (error) {
    return renderError(error);
  }
};

/// Authntcation Users or Cusetamer App ///

//regestier user function auth

export const RegesterUser = async (
  prevState: ActionResponRegester | null,
  formData: FormData
): Promise<ActionResponRegester> => {
  // const rawData = Object.fromEntries(formData);
  const UserData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    name: formData.get("name") as string,
  };

  const validatedData = SignupFormSchema.safeParse(UserData);
  if (!validatedData.success) {
    return {
      success: false,
      Data: {
        email: UserData.email,
        password: UserData.password,
        name: UserData.name,
      },
      message: "Please fix the errors in the form",
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  const existingUser = await db.users.findUnique({
    where: { email: UserData.email },
  });
  if (existingUser) {
    return {
      success: false,
      Data: {
        email: UserData.email,
        password: UserData.password,
        name: UserData.name,
      },
      message: "User already exists",
    };
  }
  const salt = generateSalt();
  const hashedPassword = await hashPassword(UserData.password, salt);
  const Token = await encrypt({ email: UserData.email });
  const user = await db.users.create({
    data: {
      email: UserData.email,
      name: UserData.name,
      password: hashedPassword,
      role: "custamar",
      salt: salt,
      token: Token,
    },
  });
  await createSession(user, await cookies());
  return (
    redirect("/") ||
    toast.success("Regester successfully!") || {
      success: true,
      message: "Login successfully!",
    }
  );
};

//log in user funcrion auth
export const loginUser = async (
  prevState: ActionResponseere | null,
  formData: FormData
): Promise<ActionResponseere> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const UserData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const validatedData = LoginFormSchema.safeParse(UserData);
  if (!validatedData.success) {
    return {
      success: false,
      message: "Please fix the errors in the form",
      Data: { email: UserData.email, password: UserData.password },
      errors: validatedData.error.flatten().fieldErrors,
    };
  }
  const user = await db.users.findUnique({ where: { email } });
  if (user == null || user.password == null || user.salt == null) {
    return {
      success: false,
      Data: { email: UserData.email, password: UserData.password },
      message: "Invalid email or password",
    };
  }
  const isCorrectPassword = await comparePasswords({
    hashedPassword: user.password,
    password: password,
    salt: user.salt,
  });
  if (!user || !isCorrectPassword) {
    return {
      success: false,
      Data: { email: UserData.email, password: UserData.password },
      message: "Invalid email or password",
    };
    // throw new Error("Invalid email or password");
  }
  await createSession(user, await cookies());
  return (
    redirect("/") ||
    toast.success("Login successfully!") || {
      Data: { email: "", password: "" },
      success: true,
      message: "Login successfully!",
    }
  );
};
//log out functhin Auth
export async function logout() {
  await removeUserFromSession(await cookies());
}
//get User Data profile
export const getUserData = async () => {
  const user = await getUserFromSession(await cookies());
  const userData = await db.users.findUnique({
    where: {
      email: user.email,
    },
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
      country: true,
      phone: true,
      city: true,
      bio: true,
      streetAddress: true,
      createdAt: true,
    },
  });
  return userData;
};
//Updeat User Data Action
export const UpdeatUserDataAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
): Promise<ActionResponsUpdeat> => {
  const user = await getUserFromSession(await cookies());
  const file = formData.get("image") as File;
  const userdata = {
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    image: formData.get("image") as File,
    country: formData.get("country") as string,
    phone: Number(formData.get("phone")),
    city: formData.get("city") as string,
    bio: formData.get("bio") as string,
    streetAddress: Number(formData.get("streetAddress")),
  };
  try {
    const valdetionuser = UbdeatUserSchema.safeParse(userdata);
    const fullPath = await uploadImage(file);
    if (!valdetionuser.success) {
      return {
        success: false,
        Data: {
          email: userdata.email,
          name: userdata.name,
          country: userdata.country,
          city: userdata.city,
          bio: userdata.bio,
          phone: userdata.phone,
          streetAddress: userdata.streetAddress,
        },
        message: "Please fix the errors in the form",
        errors: valdetionuser.error.flatten().fieldErrors,
      };
    }
    await db.users.update({
      where: { id: user.id },
      data: {
        email: userdata.email,
        name: userdata.name,
        image: fullPath,
        country: userdata.country,
        phone: userdata.phone,
        city: userdata.city,
        bio: userdata.bio,
        streetAddress: userdata.streetAddress,
      },
    });
    revalidatePath("/profile");
    return {
      success: true,
      message: "Updeat User Data successfully!",
    };
  } catch (error) {
    return renderError(error);
  }
};

///Action Change Password
export const ChangePasswordAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
): Promise<ActionChangePass> => {
  const user = await getUserFromSession(await cookies());
  const UserPss = {
    password: formData.get("password") as string,
    password_confirmation: formData.get("password_confirmation") as string,
  };

  const valdtionChnagePass = changePasswordSchema.safeParse(UserPss);
  if (!valdtionChnagePass.success) {
    return {
      success: false,
      Data: {
        password: UserPss.password,
        password_confirmation: UserPss.password_confirmation,
      },
      message: "Please fix the errors in the form",
      errors: valdtionChnagePass.error.flatten().fieldErrors,
    };
  }
  const salt = generateSalt();
  const hashedPassword = await hashPassword(UserPss.password, salt);
  // const Token = await encrypt({ email: user.email });
  await db.users.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      salt: salt,
    },
  });
  revalidatePath("/profile");
  return {
    success: true,
    message: "Updeat Password successfully!",
  };
};

///Dashbord products ///

///Delete Product Dashbord Admin
export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  try {
    const product = await db.product.delete({
      where: {
        id: productId,
      },
    });
    await deleteImage(product.image);
    revalidatePath("/admin/products");
    return { message: "product removed" };
  } catch (error) {
    return renderError(error);
  }
};
export const fetchAdminProducts = async () => {
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};
export const fetchAdminProductDetails = async (productID: string) => {
  const product = await db.product.findUnique({
    where: { id: productID },
  });
  if (!product) redirect("dashbord");
  return product;
};
///Uodaet Product Dashbordd Admin
export const updateProductAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
): Promise<ActionUpdeatproduct> => {
  {
    try {
      const priductID = formData.get("id") as string;
      const file = formData.get("image") as File;
      console.log(file.size);
      const url = formData.get("url") as string;
      const ProductData = {
        name: formData.get("name") as string,
        company: formData.get("company") as string,
        image: formData.get("image") as File,
        price: Number(formData.get("price")),
        description: formData.get("description") as string,
        featured: formData.get("featured") === "on",
      };
      if (file.size != 0) {
        const vlidetion = updateProductSchema.safeParse(ProductData);
        await deleteImage(url);
        const fullPath = await uploadImage(file);
        if (!vlidetion.success) {
          return {
            success: false,
            Data: {
              name: ProductData.name,
              company: ProductData.company,
              price: ProductData.price,
              description: ProductData.description,
            },
            message: "Please fix the errors in the form",
            errors: vlidetion.error.flatten().fieldErrors,
          };
        }
        await db.product.update({
          where: {
            id: priductID,
          },
          data: {
            name: ProductData.name,
            company: ProductData.company,
            image: fullPath,
            price: ProductData.price,
            description: ProductData.description,
            featured: ProductData.featured,
          },
        });
        revalidatePath("/dashbord");
        return {
          success: true,
          message: "Updeat Password successfully!",
        };
      }
      const vlidetion = updateProductSchemaoning.safeParse(ProductData);
      if (!vlidetion.success) {
        return {
          success: false,
          Data: {
            name: ProductData.name,
            company: ProductData.company,
            price: ProductData.price,
            description: ProductData.description,
          },
          message: "Please fix the errors in the form",
          errors: vlidetion.error.flatten().fieldErrors,
        };
      }
      await db.product.update({
        where: {
          id: priductID,
        },
        data: {
          name: ProductData.name,
          company: ProductData.company,
          price: ProductData.price,
          description: ProductData.description,
          featured: ProductData.featured,
        },
      });
      revalidatePath("dashbord");
      return {
        success: true,
        message: "Updeat Product successfully!",
      };
    } catch (error) {
      return renderError(error);
    }
  }
};
//ceart product Dashbord Admin
export const cerateProductAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
): Promise<ActionUpdeatproduct> => {
  {
    try {
      const file = formData.get("image") as File;
      const ProductData = {
        name: formData.get("name") as string,
        company: formData.get("company") as string,
        image: formData.get("image") as File,
        price: Number(formData.get("price")),
        description: formData.get("description") as string,
        featured: formData.get("featured") === "on",
      };
      const vlidetion = updateProductSchema.safeParse(ProductData);
      const fullPath = await uploadImage(file);
      if (!vlidetion.success) {
        return {
          success: false,
          Data: {
            name: ProductData.name,
            company: ProductData.company,
            price: ProductData.price,
            description: ProductData.description,
          },
          message: "Please fix the errors in the form",
          errors: vlidetion.error.flatten().fieldErrors,
        };
      }
      await db.product.create({
        data: {
          name: ProductData.name,
          company: ProductData.company,
          image: fullPath,
          price: ProductData.price,
          description: ProductData.description,
          featured: ProductData.featured,
          userId: "Admin",
        },
      });
      revalidatePath("/dashbord");
      return {
        success: true,
        message: "Updeat Password successfully!",
      };
    } catch (error) {
      return renderError(error);
    }
  }
};
