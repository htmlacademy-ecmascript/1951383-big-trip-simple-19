import { render } from '../render.js';

// Наш контейнер для отрисовки
import TripListView from '../view/trip-list-view.js';
// Контейнер для сортировки
import SortView from '../view/list-sort-view.js';
// Форма редактирования
import EditPointView from '../view/edit-point-view.js';
// Точка маршрута
import PointView from '../view/trip-point-view.js';
// Фильтры
import ListFilterView from '../view/list-filter-view.js';
// Форма создания
import NewPointView from '../view/new-point-view.js';

export default class TripPresenter {
  POINT_COUNT = 3;
  // Создаем новый контейнер ul
  tripListComponent = new TripListView();
  // Указываем параметры конструктору
  constructor({ boardContainer, filterContainer }) {
    this.boardContainer = boardContainer;
    this.filterContainer = filterContainer;
  }

  init() {
    // Фильтры отрисовываем в контейнер для фильтров
    render(new ListFilterView(), this.filterContainer);
    // Затем сортировка в Контейнер для отрисовки
    render(new SortView(), this.boardContainer);
    // Затем TripListView добаляем в Контейнер для отрисовки (передадим в main)
    render(this.tripListComponent, this.boardContainer);
    // Добавляем форму редактирования в TripListView первой
    render(new EditPointView(), this.tripListComponent.getElement());
    // Добавляем форму создания в TripListView
    render(new NewPointView(), this.tripListComponent.getElement());
    // Точку маршрута рисуем три раза
    for (let i = 0; i < this.POINT_COUNT; i++) {
      render(new PointView(), this.tripListComponent.getElement());
    }
  }
}
