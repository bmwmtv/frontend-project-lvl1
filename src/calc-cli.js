/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

export const randomCalcFunc = () => {
  const calcFunc = ['+', '-', '*']; // задаём список операций калькулятора
  return calcFunc[Math.floor(Math.random() * 3)]; // выбираем случайную операцию
};
