import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';
import '@testing-library/jest-dom';

describe('Checkbox', () => {
    test('test is success when active', () => {
        render(<Checkbox label="قوانین را می‌پذیرم" />);

        // show label
        expect(screen.getByText('قوانین را می‌پذیرم')).toBeInTheDocument();

        //has checkbox
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();

        // not select
        expect(checkbox).not.toBeChecked();

    });
	 test('با defaultChecked تیک خورده است', () => {
            render(<Checkbox label="قوانین را می‌پذیرم" defaultChecked />);
            expect(screen.getByRole('checkbox')).toBeChecked();
        });
});
