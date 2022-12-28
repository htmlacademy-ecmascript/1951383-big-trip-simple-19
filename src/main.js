import ListFilterView from './view/list-filter-view.js';
import TripPresenter from './presenter/trips-presenter.js';
import {render} from './render.js';
import PointsModel from './model/points-model.js';
// Контейнер для фильтров
const headerElement = document.querySelector('.trip-controls');
// Контейнер для отрисовки
const tripEventsElement = document.querySelector('.trip-events');
// Модель
const pointsModel = new PointsModel();
// Новый презентер с параметрами
const tripPresenter = new TripPresenter({
  pointsContainer: tripEventsElement,
  pointsModel
});

render(new ListFilterView, headerElement);

tripPresenter.init();
