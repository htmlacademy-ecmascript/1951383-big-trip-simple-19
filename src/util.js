const getRandomNumber = (min, max) => {
  if(min < 0 || max < 0 || max <= min){
    return NaN;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomArrayElement = (items) => (
  items[Math.floor(Math.random() * items.length)]
);

const DATE_FORMAT_DATE = 'DD MMM';
const DATE_FORMAT_TIME = 'HH:mm';

const isEscapeKey = (evt) => (evt.key === 'Escape' || evt.key === 'Esc');

export {getRandomNumber, getRandomArrayElement, DATE_FORMAT_DATE, DATE_FORMAT_TIME, isEscapeKey};
