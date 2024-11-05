import { FC, TextareaHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/cn';

export type TextareaType = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: FC<TextareaType> = ({ className, ...props }) => {
  return (
    <textarea
      className={cn(className, 'rounded-md border p-4 text-sm resize-none')}
      {...props}
    />
  );
};
