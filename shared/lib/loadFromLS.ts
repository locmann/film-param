import { InputType } from '@/widgets/form/ui/form';

export const loadFromLS = (): InputType | null => {
  const savedData = localStorage.getItem('film-param');
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
};
