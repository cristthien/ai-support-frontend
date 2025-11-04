import { z } from "zod";

// Request schema
export const RequestOTPSchema = z
  .object({
    email: z.string().email(),
  })
  .strict();

export type RequestOTPType = z.infer<typeof RequestOTPSchema>;

// Response schema
export const OTPResponseSchema = z
  .object({
    message: z.string(),
    email: z.string().email(),
    expires_in_minutes: z.number().int().nonnegative(),
  })
  .strict();

export type OTPResponseType = z.infer<typeof OTPResponseSchema>;
