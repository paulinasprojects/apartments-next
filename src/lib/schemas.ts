import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Name is requred"),
  email: z.string().trim().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z.object({
  email: z.string().trim().min(1, "Email is requred").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have 8 characters"),
});
