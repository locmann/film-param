'use client';

import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Controller, useForm } from 'react-hook-form';
import { Select } from '@/shared/ui/select';
import { formatUNF } from '@/shared/lib/formatUNF';
import { countries } from '@/shared/model/countries';
import { Button } from '@/shared/ui/button';
import { saveToLS } from '@/shared/lib/saveToLS';
import { useEffect } from 'react';
import { loadFromLS } from '@/shared/lib/loadFromLS';

export type InputType = {
  name: string;
  genre: string;
  format: string;
  num: string;
  country: string;
  cost?: number;
  text?: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<InputType>({
    mode: 'onChange',
  });

  const costValue = watch('cost');

  const onSubmit = (data: InputType) => {
    console.log('Form data:', data);

    saveToLS(data);
  };

  useEffect(() => {
    const data = loadFromLS();
    if (data) {
      reset(data);
    }
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <form className="flex mt-2.5 md:flex-row md:gap-32 flex-col">
        <div className="flex flex-col gap-6 md:flex-1">
          <label className="flex flex-col text-label opacity-70 gap-3.5">
            Название проекта
            <div className="relative">
              <Input
                placeholder="Название"
                className={`${errors.name ? 'border-red-500' : ''}`}
                {...register('name', { required: 'Заполните поле' })}
                style={{
                  paddingRight: errors.name ? '100px' : '16px',
                }}
              />
              {errors.name && (
                <span className="text-red-600 -translate-y-2/4 top-2/4 right-[10px] absolute">
                  {errors.name.message}
                </span>
              )}
            </div>
          </label>
          <label className="flex flex-col text-label opacity-70 gap-3.5">
            Жанр
            <div className="relative">
              <Input
                id="genre"
                placeholder="Жанр"
                className={`${errors.genre ? 'border-red-500' : ''}`}
                {...register('genre', { required: 'Заполните поле' })}
                style={{
                  paddingRight: errors.genre ? '100px' : '16px',
                }}
              />
              {errors.genre && (
                <span className="text-red-600 -translate-y-2/4 top-2/4 right-[10px] absolute">
                  {errors.genre.message}
                </span>
              )}
            </div>
          </label>
          <label className="flex flex-col text-label opacity-70 gap-3.5">
            Формат (для онлайн-платформ, большого экрана, интернета, другое)
            <div className="relative">
              <Select
                className={`${errors.format ? 'border-red-500' : ''}`}
                {...register('format', { required: 'Выберите формат' })}
              >
                <option value="">Выберите формат</option>
                <option value="Онлайн-платформа">Онлайн-платформа</option>
                <option value="Большой экран">Большой экран</option>
                <option value="Интернет">Интернет</option>
              </Select>
              {errors.format && (
                <span className="text-red-600 -translate-y-2/4 top-2/4 right-[10px] absolute">
                  {errors.format.message}
                </span>
              )}
            </div>
          </label>
          <label className="flex flex-col text-label opacity-70 gap-3.5">
            № УНФ или отсутствует
            <div className="relative">
              <Input
                id="num"
                placeholder="890-000-000-00-000"
                className={`${errors.num ? 'border-red-500' : ''}`}
                {...register('num', {
                  required: 'Введите номер в формате 890-000-000-00-000',
                  pattern: {
                    value: /^\d{3}-\d{3}-\d{3}-\d{2}-\d{3}$/,
                    message: 'Неверный формат номера',
                  },
                })}
                onChange={(e) => {
                  e.target.value = formatUNF(e.target.value);
                }}
                maxLength={17}
              />
              {errors.num && (
                <span className="text-red-600 -translate-y-2/4 top-2/4 right-[10px] absolute">
                  {errors.num.message}
                </span>
              )}
            </div>
          </label>
        </div>

        <div className="flex flex-col gap-6 md:flex-1">
          <label className="flex flex-col text-label opacity-70 gap-3.5">
            Страна-производитель (копродукция)
            <div className="relative">
              <Select
                className={`${errors.country ? 'border-red-500' : ''}`}
                {...register('country', { required: 'Выберите страну' })}
              >
                <option value="">Выберите страну</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
              {errors.country && (
                <span className="text-red-600 -translate-y-2/4 top-2/4 right-[10px] absolute">
                  {errors.country.message}
                </span>
              )}
            </div>
          </label>
          {costValue !== undefined && (
            <label className="flex flex-col text-label opacity-70 gap-3.5">
              Сметная стоимость производства
              <div className="relative">
                <Controller
                  name="cost"
                  control={control}
                  rules={{
                    required: 'Введите сметную стоимость',
                    min: {
                      value: 0,
                      message: 'Стоимость должна быть положительным числом',
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="Введите сметную стоимость"
                      className={`${errors.cost ? 'border-red-500' : ''}`}
                      {...field}
                    />
                  )}
                />
                {errors.cost && (
                  <span className="text-red-600 -translate-y-2/4 top-2/4 right-[10px] absolute">
                    {errors.cost.message}
                  </span>
                )}
              </div>
            </label>
          )}
          <label className="flex flex-col text-label opacity-70 gap-3.5">
            Синопсис
            <Textarea
              {...register('text')}
              id="summary"
              placeholder="Напишите краткое изложение"
            />
          </label>
        </div>
      </form>
      <Button
        type="button"
        onClick={handleSubmit(onSubmit)}
        className="w-fit self-end"
        disabled={!isValid}
      >
        Следующий шаг →
      </Button>
    </div>
  );
};
