/* src/lib/validations.ts */
import { z } from 'zod';

// Mobile validation schema
export const mobileSchema = z.object({
  mobileNumber: z
    .string()
    .min(1, 'شماره موبایل اجباری است')
    .regex(/^09\d{9}$/, 'فرمت شماره موبایل صحیح نیست (مثال: 09123456789)')
});

// OTP validation schema
export const otpSchema = z.object({
  otpCode: z
    .string()
    .min(1, 'کد تایید اجباری است')
    .regex(/^\d{6}$/, 'کد تایید ۶ رقمی وارد کنید')
});

// Password validation schema
export const passwordSchema = z.object({
  password: z
    .string()
    .min(1, 'رمز عبور اجباری است')
    .min(6, 'حداقل ۶ کاراکتر')
});

// Combined login schemas
export const mobileLoginSchema = mobileSchema;
export const otpLoginSchema = mobileSchema.merge(otpSchema);
export const passwordLoginSchema = mobileSchema.merge(passwordSchema);

export type MobileFormData = z.infer<typeof mobileSchema>;
export type OtpFormData = z.infer<typeof otpLoginSchema>;
export type PasswordFormData = z.infer<typeof passwordLoginSchema>;