const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

// Функция для создания DOM-элемента
function createElement(template) {
  // Генерирует div (в качестве контейнера)
  const newElement = document.createElement('div');
  // И в этот div записывает нужную разметку
  newElement.innerHTML = template;
  // Возвращаем сам элемент из контейнера
  return newElement.firstElementChild;
}

// Функция, позволяющая вставить элемент в определенное место
function render(component, container, place = RenderPosition.BEFOREEND) {
  container.insertAdjacentElement(place, component.getElement());
}

export {RenderPosition, createElement, render};
