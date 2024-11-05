import { FC, InputHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/cn';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        className,
        'h-13 rounded-md border p-4 text-sm placeholder:opacity-40 w-full'
      )}
      {...props}
    />
  );
};
