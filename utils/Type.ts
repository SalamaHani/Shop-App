import { Prisma } from "@prisma/client";
import { FormState } from "./schema";
export type actionFunction = (
  prevState: FormState,
  formData: FormData
) => Promise<{ message: string }>;
export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;
