// Common types used throughout the application

export interface User {
	id: string;
	email: string;
	name: string;
	role: 'guest' | 'registered' | 'premium';
	avatar?: string;
	createdAt: string;
}

export interface Holding {
	id: string;
	symbol: string;
	name: string;
	quantity: number;
	averagePrice: number;
	currentPrice: number;
	totalValue: number;
	profitLoss: number;
	profitLossPercentage: number;
	lastUpdated: string;
}

export interface Transaction {
	id: string;
	type: 'buy' | 'sell';
	symbol: string;
	quantity: number;
	price: number;
	totalAmount: number;
	fees: number;
	timestamp: string;
	status: 'pending' | 'completed' | 'failed';
}

export interface ApiResponse<T = any> {
	success: boolean;
	data: T;
	message: string;
	errors?: string[];
}

export interface PaginatedResponse<T> {
	data: T[];
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
		hasNext: boolean;
		hasPrev: boolean;
	};
}

export interface ChartDataPoint {
	x: string | number;
	y: number;
	label?: string;
}

export interface TimeSeriesData {
	timestamp: string;
	value: number;
}

export interface SelectOption {
	value: string | number;
	label: string;
	disabled?: boolean;
}

export interface FormField {
	name: string;
	label: string;
	type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea';
	placeholder?: string;
	required?: boolean;
	validation?: {
		min?: number;
		max?: number;
		pattern?: RegExp;
		custom?: (value: any) => string | null;
	};
	options?: SelectOption[];
}

export interface TableColumn<T = any> {
	key: keyof T;
	title: string;
	sortable?: boolean;
	render?: (value: any, record: T) => React.ReactNode;
	width?: string | number;
	align?: 'left' | 'center' | 'right';
}

export interface FilterOption {
	key: string;
	label: string;
	type: 'select' | 'date' | 'range' | 'search';
	options?: SelectOption[];
	defaultValue?: any;
}

// Navigation types
export interface NavItem {
	id: string;
	label: string;
	path: string;
	icon?: React.ComponentType<any>;
	badge?: string | number;
	children?: NavItem[];
	requiresAuth?: boolean;
	roles?: string[];
}

// Theme types
export interface ThemeColors {
	primary: string;
	secondary: string;
	success: string;
	warning: string;
	error: string;
	info: string;
	background: string;
	surface: string;
	text: {
		primary: string;
		secondary: string;
		disabled: string;
	};
}

export interface Theme {
	mode: 'light' | 'dark';
	colors: ThemeColors;
	spacing: {
		xs: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
	};
	borderRadius: {
		sm: string;
		md: string;
		lg: string;
		xl: string;
	};
	shadows: {
		sm: string;
		md: string;
		lg: string;
		xl: string;
	};
}

// Component prop types
export interface BaseComponentProps {
	className?: string;
	children?: React.ReactNode;
	testId?: string;
}

export interface ButtonProps extends BaseComponentProps {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	fullWidth?: boolean;
}

export interface InputProps extends BaseComponentProps {
	type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
	placeholder?: string;
	value?: string | number;
	defaultValue?: string | number;
	onChange?: (value: string) => void;
	onBlur?: () => void;
	onFocus?: () => void;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	label?: string;
	helperText?: string;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
}

export interface ModalProps extends BaseComponentProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
	closeOnOverlayClick?: boolean;
	closeOnEscape?: boolean;
	showCloseButton?: boolean;
}

// Error types
export interface AppError {
	code: string;
	message: string;
	details?: any;
	timestamp: number;
}

// Utility types
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Nullable<T> = T | null;

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

