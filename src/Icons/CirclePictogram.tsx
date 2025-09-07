import clsx from 'clsx';

type CirclePictogramProps = {
    isDark: boolean;
    srcDark: string; // تصویر دارک (مثلاً svg)
    srcLight: string; // تصویر لایت
    size?: number; // اندازه‌ی خود آیکن (px)
    className?: string; // کلاس‌های اضافه برای دایره
};

export function CirclePictogram({
    isDark,
    srcDark,
    srcLight,
    size = 20,
    className,
}: CirclePictogramProps) {
    const src = isDark ? srcDark : srcLight;
    return (
        <div
            className={clsx(
                'w-8.5 h-8.5 grid place-items-center rounded-full',
                'bg-accent-orange light:bg-primary-blue',
                className,
            )}
            aria-hidden
        >
            <span
                className="block bg-white"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    WebkitMask: `url(${src}) center / contain no-repeat`,
                    mask: `url(${src}) center / contain no-repeat`,
                }}
            />
        </div>
    );
}
