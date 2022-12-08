import {createElement} from '../render.js';

// Функция для создания шаблона
// Шаблон скопирован из разметки файла list-filter.html, заголовок Filter events
function createListFilterTemplate() {
  return (
    `<form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>
    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
  );
}

// Экспортируем класс
export default class ListFilterView {
  // Возвращаем разметку шаблона
  getTemplate() {
    return createListFilterTemplate();
  }

  // Создаем элемент
  getElement() {
    // Если свойство элемент не заполнено
    if (!this.element) {
      // Мы заполняем свойство результатом createElement
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  // Предусматриваем метод для удаления элемента
  removeElement() {
    this.element = null;
  }
}
