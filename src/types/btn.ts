export interface CheckboxProps {
    label: string;
}

export interface LoginProps {
    type?: string;
}

// types/btn.ts

export interface GroupBtnPropsoups {
    type: 'continue' | 'addNewCard' | 'save' | 'delete' | 'back';
    icon?: React.ReactNode;
    onClick?: () => void;
}
