import Typography from '@mui/material/Typography';
import TextField from '../../components/Inputs/TextField';
import { IoMdPerson } from '../../Icons';
import Button from '../../components/Button/Button';

const Suggestions = () => {
  return (
    <div dir="rtl" className="min-h-screen dark:bg-black bg-light-primary-darker dark:text-text-color text-light-text-color">
      <main className="flex-1">
        <section className="min-h-screen rounded-lg p-4 flex flex-col justify-center items-center py-8">
          <div className="w-full max-w-md mx-auto text-right">

            {/* Illustration */}
            <div className="mb-6 text-center">
              <img
                alt="ارسال نظر"
                src="/images/man-checking-comment.svg"
                height={174}
                width={232}
                className="mx-auto"
              />
            </div>

            {/* Title */}
            <Typography className="!font-alibaba mb-1" fontSize={17}>
              نظرات و پیشنهادات
            </Typography>

            <Typography className="!font-alibaba mb-4 text-sm dark:text-neutral-300 text-neutral-600" fontSize={12}>
              شما می‌توانید پیشنهادات و انتقادات خود را با ما به اشتراک بگذارید
            </Typography>

            {/* Fullname */}
            <div className="mb-4">
              <label htmlFor="fullName" className="block pb-2 text-xs !font-alibaba dark:text-text-color text-light-text-color">
                نام و نام خانوادگی
              </label>
              <div className="relative">
                <TextField
                  mobileIcon={<IoMdPerson />}
                  className="w-full"
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                />
              </div>
            </div>

            {/* Topic */}
            <div className="mb-4">
              <label htmlFor="topic" className="block pb-2 text-xs !font-alibaba dark:text-text-color text-light-text-color">
                موضوع
              </label>
              <select
                id="topic"
                className="
                  w-full text-sm !font-peyda rounded-lg px-4 py-3
                  bg-white text-neutral-900
                  border border-custom-gray
                  focus:outline-none focus:ring-2 focus:ring-primary-blue
                  dark:bg-gray-800 dark:text-neutral-100
                  dark:border-custom-border-light
                  dark:focus:ring-2
                "
                defaultValue="feedback"
              >
                <option className="!font-peyda" value="purchase">خرید محصولات</option>
                <option className="!font-peyda" value="feedback">پیشنهاد/انتقاد</option>
                <option className="!font-peyda" value="bug">گزارش مشکل</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block pb-2 text-xs !font-alibaba dark:text-text-color text-light-text-color">
                متن پیام
              </label>
              <textarea
                id="message"
                rows={4}
                className="
                  w-full text-sm font-peyda rounded-lg px-4 py-3
                  bg-white text-neutral-900
                  placeholder:text-neutral-500
                  border border-custom-gray
                  focus:outline-none focus:ring-2 focus:ring-primary-blue
                  dark:bg-gray-800 dark:text-neutral-100
                  dark:placeholder:text-neutral-400
                  dark:border-custom-border-light
                  dark:focus:ring-2 
                  resize-none
                "
                placeholder="پیغام و پیشنهاد شما"
              />
            </div>

            {/* Submit */}
            <Button className="w-full text-sm text-text-color bg-primary-blue hover:bg-primary-light dark:bg-accent-orange dark:hover:brightness-110">
              ثبت نظر
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Suggestions;
