// Функция для возврата случайного элемента из массива
const getRandomArrayElement = (items) => (
  items[Math.floor(Math.random() * items.length)]
);

// Функция для возврата случайного целого числа
const getRandomInteger = (a, b) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));

  return Math.floor(min + Math.random() * (max - min + 1));
};

export {getRandomArrayElement, getRandomInteger};
