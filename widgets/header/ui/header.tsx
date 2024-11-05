import { Button } from '@/shared/ui/button';

export const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="text-xl font-bold md:text-5xl">
        Производственные параметры фильма
      </h1>
      <Button>Отменить заполнение</Button>
    </header>
  );
};
