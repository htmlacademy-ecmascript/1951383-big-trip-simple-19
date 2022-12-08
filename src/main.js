import TripPresenter from './presenter/trip-presenter.js';
// Контейнер для фильтров
const headerElement = document.querySelector('.trip-controls');
// Контейнер для отрисовки
const tripEventsElement = document.querySelector('.trip-events');
// Новый презентер с параметрами
const tripPresenter = new TripPresenter({
  boardContainer: tripEventsElement,
  filterContainer: headerElement,
});

tripPresenter.init();
