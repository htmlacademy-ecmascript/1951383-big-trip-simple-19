import TripPresenter from './presenter/trips-presenter.js';
import PointsModel from './model/model.js';
import { render } from './render.js';
import ListFilterView from './view/list-filter-view.js';

const tripEventsElement = document.querySelector('.trip-events');
const headerElement = document.querySelector('.trip-controls');
const pointsModel = new PointsModel();

const tripPresenter = new TripPresenter({
  pointContainer: tripEventsElement,
  pointsModel
});

render(new ListFilterView, headerElement);

tripPresenter.init();
