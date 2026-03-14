import type { ElementType, ReactNode } from 'react';
import type { FontWeight, TypographyVariant } from '../../tokens/typography';

export type TypographyColor = 'heading' | 'body' | 'secondary' | 'primary' | 'inherit';

export interface TypographyProps {
  variant?: TypographyVariant;
  weight?: FontWeight;
  color?: TypographyColor;
  as?: ElementType;
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}
