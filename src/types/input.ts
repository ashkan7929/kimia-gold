export interface MobileInputProps {
    label: string;
    placeholder?: string;
    mobileIcon?: React.ReactNode;
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



export interface Datepicker {
    placeholder?: string;
    
}