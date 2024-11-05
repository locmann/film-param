import { InputType } from '@/widgets/form/ui/form';

export const saveToLS = (formState: InputType) => {
  localStorage.setItem('film-param', JSON.stringify(formState));
};
