import { render, RenderPosition } from '../render.js';

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
  // Создаем новый контейнер ul
  tripListComponent = new TripListView();
  // Указываем параметры конструктору
  constructor({ boardContainer, filterContainer, pointsModel }) {
    this.boardContainer = boardContainer;
    this.filterContainer = filterContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    // Точки на основании модели
    this.listPoints = [...this.pointsModel.getPoints()];
    // Фильтры отрисовываем в контейнер для фильтров
    render(new ListFilterView(), this.filterContainer);
    // Затем сортировка в Контейнер для отрисовки
    render(new SortView(), this.boardContainer);
    // Затем TripListView добаляем в Контейнер для отрисовки (передадим в main)
    render(this.tripListComponent, this.boardContainer);
    // Добавляем форму создания в TripListView
    render(new NewPointView(), this.tripListComponent.getElement(), RenderPosition.AFTERBEGIN);
    // Точку маршрута рисуем три раза
    for (let i = 0; i < this.listPoints.length; i++) {
      render(new PointView({point: this.listPoints[i]}), this.tripListComponent.getElement());
    }
    // Добавляем форму редактирования в TripListView
    render(new EditPointView(this.listPoints[0]), this.tripListComponent.getElement(), RenderPosition.AFTERBEGIN);
  }
}
