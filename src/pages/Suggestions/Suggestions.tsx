import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '../../components/Inputs/TextField';
import { IoMdPerson } from '../../Icons';
import Button from '../../components/Button/Button';

/* ========= Types & Constants ========= */
type Topic = 'purchase' | 'feedback' | 'bug';

const TOPIC_OPTIONS: { value: Topic; label: string }[] = [
  { value: 'purchase', label: 'خرید محصولات' },
  { value: 'feedback', label: 'پیشنهاد/انتقاد' },
  { value: 'bug', label: 'گزارش مشکل' },
];

type FormState = {
  id: string,
  fullName: string;
  topic: Topic;
  message: string;
};

const INITIAL_STATE: FormState = {
  id: '',
  fullName: '',
  topic: 'feedback',
  message: '',
};

export default function Suggestions() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const onChange =
    (key: keyof FormState) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [key]: e.target.value }));
        setErrors(prev => ({ ...prev, [key]: undefined }));
      };

  const validate = (data: FormState) => {
    const next: typeof errors = {};
    if (!data.fullName.trim()) next.fullName = 'نام و نام خانوادگی الزامی است.';
    if (!data.message.trim()) next.message = 'متن پیام الزامی است.';
    else if (data.message.trim().length < 5) next.message = 'متن پیام خیلی کوتاه است.';
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;


    setSent(true);
    setTimeout(() => setSent(false), 2000);
    setForm(INITIAL_STATE);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen dark:bg-black bg-light-primary-darker dark:text-text-color text-light-text-color"
    >
      <main className="flex-1">
        <section className="min-h-screen rounded-lg p-4 flex flex-col justify-center items-center py-8">
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto text-right">
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

            <Typography className="!font-peyda mb-1" fontSize={17}>
              نظرات و پیشنهادات
            </Typography>
            <Typography
              className="!font-peyda mb-4 text-sm dark:text-neutral-300 text-neutral-600"
              fontSize={12}
            >
              شما می‌توانید پیشنهادات و انتقادات خود را با ما به اشتراک بگذارید
            </Typography>

            {/* Full name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block pb-2 mt-3 text-xs !font-peyda dark:text-text-color text-light-text-color"
              >
                نام و نام خانوادگی
              </label>
              <TextField
                // name="fullName" TODO: CHECK IT IF NEED
                // value={form.fullName} TODO: CHECK IT IF NEED
                onChange={onChange('fullName')}
                mobileIcon={<IoMdPerson />}
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500 !font-peyda">{errors.fullName}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="topic"
                className="block pb-2 text-xs !font-peyda dark:text-text-color text-light-text-color"
              >
                موضوع
              </label>
              <select
                id="topic"
                name="topic"
                value={form.topic}
                onChange={onChange('topic')}
                className="
                  w-full text-sm !font-peyda rounded-lg px-4 py-3
                  bg-white text-neutral-900
                  border border-custom-gray
                  focus:outline-none focus:ring-2 focus:ring-gray-500
                  dark:bg-black dark:text-neutral-100
                  dark:border-gray-500 dark:focus:ring-2
                "
              >
                {TOPIC_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value} className="!font-peyda">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block pb-2 text-xs !font-alibaba dark:text-text-color text-light-text-color"
              >
                متن پیام
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange('message')}
                placeholder="پیغام و پیشنهاد شما"
                aria-invalid={!!errors.message}
                className="
                  w-full text-sm font-peyda rounded-lg px-4 py-3
                  bg-white text-neutral-900 placeholder:text-neutral-500
                  border border-custom-gray
                  focus:outline-none focus:ring-2 focus:ring-primary-blue
                  dark:bg-black dark:border-gray-500 dark:text-neutral-100
                  dark:placeholder:text-neutral-400 dark:focus:ring-2
                  resize-none
                "
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500 !font-peyda">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full text-sm font-peyda text-text-color bg-primary-blue hover:bg-primary-light dark:bg-accent-orange dark:hover:brightness-110"
            >
              ثبت نظر
            </Button>

            {sent && (
              <p className="mt-3 text-green-600 dark:text-green-400 text-xs !font-peyda">
                نظر شما با موفقیت ثبت شد.
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}
