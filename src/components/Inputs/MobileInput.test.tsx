import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileInput from './MobileInput';


describe('MobileInput', () => {
	test('فیلد شماره موبایل درست رندر میشه', () => {
		render(<MobileInput label="شماره موبایل" id="mobile" htmlFor="mobile" />);
		expect(screen.getByLabelText('شماره موبایل')).toBeInTheDocument();
	})
	// test('کاربر شماره موبایل را وارد می‌کند', () => {

	// })
})