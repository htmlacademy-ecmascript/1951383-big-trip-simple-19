import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
// Контейнер для фильтров
const headerElement = document.querySelector('.trip-controls');
// Контейнер для отрисовки
const tripEventsElement = document.querySelector('.trip-events');
// Модель
const pointsModel = new PointsModel();
// Новый презентер с параметрами
const tripPresenter = new TripPresenter({
  boardContainer: tripEventsElement,
  filterContainer: headerElement,
  pointsModel
});

tripPresenter.init();
