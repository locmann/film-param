import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-colors duration-150 cursor-pointer ' +
    'disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none disabled:bg-disabled-bg',
  {
    variants: {
      variant: {
        default: 'border py-3.5 px-4 4xl rounded-4xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: FC<ButtonProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <button className={buttonVariants({ variant, className })} {...props}>
      {children}
    </button>
  );
};
