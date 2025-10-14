import type { AxiosError } from 'axios';

type ApiErrorBody = {
    code?: string;
    message?: string;
};

export function errorHandler(error: unknown): string {
    const err = error as AxiosError<ApiErrorBody>;
    const status = err.response?.status;
    const apiCode = err.response?.data?.code;

    if (!status) {
        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
            return 'اینترنت شما قطع است. لطفاً اتصال را بررسی کرده و دوباره تلاش کنید.';
        }

        if (err.code === 'ERR_NETWORK') {
            return 'اتصال به سرور برقرار نشد. لطفاً اینترنت خود را بررسی کرده و دوباره تلاش کنید.';
        }

        if (
            typeof err.message === 'string' &&
            err.message.includes('net::ERR_CERT_AUTHORITY_INVALID')
        ) {
            return 'خطا در برقراری ارتباط امن با سرور. لطفاً بعداً دوباره تلاش کنید.';
        }

        if (err.code === 'ERR_NETWORK') {
            return 'ارتباط با سرور برقرار نشد. لطفاً اینترنت خود را بررسی کنید.';
        }

        return 'مشکل در اتصال به سرور. لطفاً دوباره تلاش کنید.';

        return 'مشکل در اتصال به سرور. لطفاً اینترنت خود را بررسی کنید.';
    }

    if (status === 400 && apiCode) {
        switch (apiCode) {
            case 'DUPLICATE_NATIONAL_CODE':
                return 'این کد ملی قبلاً ثبت شده است.';
            case 'INVALID_NATIONAL_CODE':
                return 'کد ملی نامعتبر است.';
            case 'INVALID_BIRTH_DATE':
                return 'تاریخ تولد نامعتبر است.';
            case 'INVALID_REFERRAL_CODE':
                return 'کد معرف نامعتبر است.';
            case 'ERR_INTERNET_DISCONNECTED':
                return 'اینترنت شما قطع شده است. لطفاً اتصال را بررسی کنید.';

            default:
                return 'اطلاعات وارد شده نامعتبر است.';
        }
    }

    switch (status) {
        case 400:
            return 'درخواست نامعتبر است.';
        case 401:
            return 'اطلاعات کاربری شما منقضی شده است. لطفاً دوباره وارد شوید.';
        case 403:
            return 'شما اجازه دسترسی ندارید. لطفاً با پشتیبانی تماس بگیرید.';
        case 404:
            return 'موردی یافت نشد.';
        case 409:
            return 'تداخل در داده‌ها. لطفاً بعداً تلاش کنید.';
        case 422:
            return 'داده‌های ارسالی معتبر نیست.';
        case 429:
            return 'تعداد درخواست‌ها زیاد است. لطفاً بعداً تلاش کنید.';
        case 500:
            return 'خطای داخلی سرور. لطفاً بعداً دوباره تلاش کنید.';
        case 502:
            return 'پاسخ نامعتبر از سرور میانی (Bad Gateway). لطفاً بعداً تلاش کنید.';
        case 503:
            return 'سرویس موقتاً در دسترس نیست. لطفاً کمی بعد دوباره تلاش کنید.';
        case 504:
            return 'مهلت پاسخ سرور به پایان رسید (Timeout).';
        default:
            if (status >= 500) return 'مشکلی سمت سرور رخ داد. لطفاً کمی بعد دوباره تلاش کنید.';
            return 'خطای ناشناخته رخ داد.';
    }
}
