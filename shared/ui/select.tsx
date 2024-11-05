import { FC, SelectHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/cn';

export type SelectType = SelectHTMLAttributes<HTMLSelectElement>;

export const Select: FC<SelectType> = ({
  className,
  children,

  ...props
}) => {
  return (
    <select
      className={cn(
        className,
        'h-13 rounded-md border p-4 text-sm placeholder:opacity-40 w-full appearance-none'
      )}
      {...props}
    >
      {children}
    </select>
  );
};
