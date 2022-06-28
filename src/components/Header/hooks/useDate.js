import { days, monthNames } from '../mocks';

export const useDate = () => {
  const date = new Date();

  return {
    day: days[date.getDay()],
    month: monthNames[date.getMonth()].slice(0, 3),
    number: date.getDate(),
  };
};
