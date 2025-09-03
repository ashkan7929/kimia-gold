/* src/lib/validations.ts */
import { z } from 'zod';

// Mobile validation schema
export const mobileSchema = z.object({
    mobileNumber: z
        .string()
        .min(1, 'شماره موبایل اجباری است')
        .regex(/^09\d{9}$/, 'فرمت شماره موبایل صحیح نیست (مثال: 09123456789)'),
});

// OTP validation schema
export const otpSchema = z.object({
    otpCode: z
        .string()
        .min(1, 'کد تایید اجباری است')
        .regex(/^\d{6}$/, 'کد تایید ۶ رقمی وارد کنید'),
});

// Password validation schema
export const passwordSchema = z.object({
    password: z.string().min(1, 'رمز عبور اجباری است').min(6, 'حداقل ۶ کاراکتر'),
});

// National Code validation with Iranian algorithm
const validateNationalCode = (code: string): boolean => {
    if (!/^\d{10}$/.test(code)) return false;

    const digits = code.split('').map(Number);
    const checkDigit = digits[9];

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += digits[i] * (10 - i);
    }

    const remainder = sum % 11;
    return remainder < 2 ? checkDigit === remainder : checkDigit === 11 - remainder;
};

// National Code validation schema
export const nationalCodeSchema = z.object({
    nationalCode: z
        .string()
        .min(1, 'کد ملی اجباری است')
        .regex(/^\d{10}$/, 'کد ملی باید ۱۰ رقم باشد')
        .refine(validateNationalCode, 'کد ملی به درستی وارد نشده است'),
});

// Birth Date validation schema
export const birthDateSchema = z.object({
    birthDate: z
        .string()
        .min(1, 'تاریخ تولد اجباری است')
        .regex(/^\d{8}$/, 'فرمت تاریخ تولد باید YYYYMMDD باشد (مثال: 13791120)'),
});

// Referral Code validation schema
export const referralCodeSchema = z.object({
    referralCode: z.string().optional(),
});

// Register validation schema
export const registerSchema = mobileSchema
    .merge(nationalCodeSchema)
    .merge(birthDateSchema)
    .merge(referralCodeSchema)
    .extend({
        acceptRules: z.boolean().refine(val => val === true, 'پذیرش قوانین و مقررات الزامی است'),
    });

// Combined login schemas
export const mobileLoginSchema = mobileSchema;
export const otpLoginSchema = mobileSchema.merge(otpSchema);
// export const passwordLoginSchema = mobileSchema.merge(passwordSchema);
export const passwordLoginSchema = z.object({
    password: z.string().min(1, 'رمز عبور خود را وارد کنید'),
});

export type MobileFormData = z.infer<typeof mobileSchema>;
export type OtpFormData = z.infer<typeof otpLoginSchema>;
export type PasswordFormData = z.infer<typeof passwordLoginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type NationalCodeFormData = z.infer<typeof nationalCodeSchema>;
export type BirthDateFormData = z.infer<typeof birthDateSchema>;
