export function errorHandler(error: any) {
    const status: number | undefined = error?.response?.status;
    const errorCode: string | undefined = error?.response?.data?.code;

    console.log(status);
    if (!status) {
        return 'مشکل در اتصال به سرور. لطفا اینترنت خود را بررسی کنید.';
    }
    if (status === 400) {
        switch (errorCode) {
            case 'DUPLICATE_NATIONAL_CODE':
                return 'این کد ملی قبلاً ثبت شده است.';
            case 'INVALID_NATIONAL_CODE':
                return 'کد ملی نامعتبر است.';
            case 'INVALID_BIRTH_DATE':
                return 'تاریخ تولد نامعتبر است.';
            case 'INVALID_REFERRAL_CODE':
                return 'کد معرف نامعتبر است.';
            case 'ERR_INTERNET_DISCONNECTED':
                return 'اینترنت شما قطع شده است، لطفا اینترنت خود را بررسی کنید.';
            default:
                return 'اطلاعات وارد شده نامعتبر است.';
        }
    }
    switch (status) {
        case 400:
            return 'درخواست نامعتبر است.';
        case 401:
            return 'اطلاعات کاربری شما منقضی شده است، لطفا دوباره وارد شوید.';
        case 403:
            return 'شما اجازه دسترسی ندارید. لطفا با ادمین تماس بگیرید.';
        case 404:
            return 'موردی یافت نشد.';
        case 409:
            return 'تداخل در داده‌ها. لطفاً بعداً تلاش کنید.';
        case 422:
            return 'داده‌های ارسالی معتبر نیست.';
        case 429:
            return 'تعداد درخواست‌ها زیاد است. لطفاً بعداً تلاش کنید.';
        case 500:
            return 'خطای سرور. بعداً امتحان کنید.';
        case 502:
            return 'پرداخت با موفقیت انجام نشده است';
        case 503:
            return 'سرویس به صورت موقت در دسترس نیست، لطفا کمی بعد دوباره تلاش کنید.';
        case 504:
            return 'مهلت پاسخ سرویس به پایان رسید.';
        default:
            if (status >= 500) return 'مشکلی سمت سرور رخ داد. لطفاً کمی بعد دوباره تلاش کنید.';
            return 'خطای ناشناخته رخ داد.';
    }
}
