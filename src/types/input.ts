import type { ChangeEvent } from "react";

export interface MobileInputProps {
    label: string;
    placeholder?: string;
    mobileIcon?: React.ReactNode;
}

export interface TextFieldProps {
    placeholder?: string;
    mobileIcon?: React.ReactNode;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    disabled?: boolean;
    inputMode?: "search" | "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    variant?: 'number' | 'text' | 'tel';
    maxLength?: number
}

export interface CheckboxProps {
    label: string;
}



export interface NationalCodeProps {
    MdOutlineBadge: React.ComponentType<any>;
    placeholder?: string;
}



export interface TextereaProps {
    title?: string;
    placeholder?: string;
}


export interface SubjectSelectProps {
    options: { value: string; label: string }[];
    selectedValue: string;
    onChange: (value: string) => void;
}


export interface NumberInputProps {
    placeholder?: string;

}



export interface IDatepicker {
    placeholder?: string;

}