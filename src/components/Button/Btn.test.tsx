import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
    test('رندر می‌شود و متن درست را نشان می‌دهد', () => {
        render(<Button>سلام</Button>);
        expect(screen.getByRole('button', { name: 'سلام' })).toBeInTheDocument();
    });

    test('روی کلیک، onClick یک‌بار صدا زده می‌شود', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<Button onClick={onClick}>کلیک</Button>);
        await user.click(screen.getByRole('button', { name: 'کلیک' }));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('وقتی disabled باشد، handler اجرا نمی‌شود', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(
            <Button disabled onClick={onClick}>
                غیرفعال
            </Button>,
        );

        const btn = screen.getByRole('button', { name: 'غیرفعال' });
        expect(btn).toBeDisabled();

        await user.click(btn);
        expect(onClick).not.toHaveBeenCalled();
    });

    test('propهای type و className اعمال می‌شوند', () => {
        render(
            <Button type="submit" className="bg-indigo-600 text-white">
                ارسال
            </Button>,
        );
        const btn = screen.getByRole('button', { name: 'ارسال' }) as HTMLButtonElement;
        expect(btn).toHaveClass('bg-indigo-600', 'text-white');
        expect(btn.type).toBe('submit');
    });
});
