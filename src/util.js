// Функция для возврата случайного элемента из массива
const getRandomArrayElement = function(items) {
  return (items[Math.floor(Math.random() * items.length)]);
};

export {getRandomArrayElement};
