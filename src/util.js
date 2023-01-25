const getRandomNumber = (min, max) => {
  if(min < 0 || max < 0 || max <= min){
    return NaN;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomArrayElement = (items) => (
  items[Math.floor(Math.random() * items.length)]
);

const isEscapeKey = (evt) => (evt.key === 'Escape' || evt.key === 'Esc');

export {getRandomNumber, getRandomArrayElement, isEscapeKey};
