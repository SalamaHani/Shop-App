// lib/zod/userSchema.ts
import { z, ZodSchema } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password field must not be empty." }),
});

export const loginSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});
export const ewnUserSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
});
export const changePasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      }),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });
export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}
export const reviewSchema = z.object({
  productId: z.string().refine((value) => value !== "", {
    message: "Product ID cannot be empty",
  }),
  authorName: z.string().refine((value) => value !== "", {
    message: "Author name cannot be empty",
  }),
  rating: z.coerce
    .number()
    .int()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be at most 5" }),
  comment: z
    .string()
    .min(10, { message: "Comment must be at least 10 characters long" })
    .max(1000, { message: "Comment must be at most 1000 characters long" }),
});
///imge scaema
export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine(
      (file) => {
        return !file || file.size <= maxUploadSize;
      },
      { message: "File size must be less than 1MB" }
    )
    .refine(
      (file) => {
        return (
          !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
        );
      },
      { message: "File must be an image" }
    );
}

export const updateProductSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  description: z.string().optional(),
  image: validateImageFile(),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .positive("Price must be greater than zero"),
  company: z.string().min(1, "Company is required").max(100),
});
export const updateProductSchemaoning = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  description: z.string().optional(),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .positive("Price must be greater than zero"),
  company: z.string().min(1, "Company is required").max(100),
});

// Optional: used internally (e.g. returning user data)
export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  createdAt: z.date(),
});
export const checkoutSchema = z.object({
  FirstName: z.string().min(1, { message: "First Name is required" }),
  LastName: z.string().min(1, { message: "Last Name is required" }),
  StreetAddress: z.number().min(1, { message: "Street Address is required" }),
  Town: z.string().min(1, { message: "Town/City is required" }),
  ZIPCode: z.number().min(4, { message: "ZIP Code is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  Phone: z.number().min(7, { message: "Phone number is required" }),
});
export const UbdeatUserSchema = z.object({
  email: z.string().email({ message: "First Name is required" }),
  name: z.string().min(1, { message: "name is required" }),
  image: validateImageFile(),
  streetAddress: z.number().min(1, { message: "Street Address is required" }),
  phone: z.number().min(7, { message: "Phone number is required" }),
  bio: z.string().min(4, { message: "bio is required" }),
  city: z.string().min(1, { message: "city  is required" }),
  country: z.string().min(3, { message: "country  is required" }),
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UserOutput = z.infer<typeof userSchema>;
