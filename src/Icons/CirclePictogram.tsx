import clsx from 'clsx';

type CirclePictogramProps = {
    isDark: boolean;
    srcDark: string; 
    srcLight: string;
    size?: number; 
    className?: string; 
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
                'dark:bg-accent-orange bg-primary-blue',
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
