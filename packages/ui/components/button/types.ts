import type { ElementType, ReactNode } from 'react';

type ButtonVariant = 'solid' | 'outlined' | 'ghost' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'neutral';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  leadingContent?: ReactNode;
  trailingContent?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  as?: ElementType;
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

// When iconOnly is true, aria-label is required
interface ButtonIconOnlyProps extends ButtonBaseProps {
  iconOnly: true;
  'aria-label': string;
}

interface ButtonDefaultProps extends ButtonBaseProps {
  iconOnly?: false;
}

export type ButtonProps = ButtonIconOnlyProps | ButtonDefaultProps;
