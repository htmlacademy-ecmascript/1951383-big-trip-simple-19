import TripPresenter from './presenter/trips-presenter.js';
import PointsModel from './model/model.js';

const headerElement = document.querySelector('.trip-controls');
const pointsModel = new PointsModel();

const tripPresenter = new TripPresenter({
  pointContainer: headerElement,
  pointsModel
});

tripPresenter.init();
