import { render } from '../render.js';
import TripEventListView from '../view/trip-event-list-view';
import ListSortView from '../view/list-sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/trip-point-view.js';
import ListFilterView from '../view/list-filter-view.js';
// import NewPointView from '../view/add-new-point-view.js';
import { isEscapeKey } from '../util.js';

const tripEventsElement = document.querySelector('.trip-events');

export default class TripPresenter {
  #tripComponent = new TripEventListView();

  #pointContainer = null;
  #pointsModel = null;
  #listPoints = [];

  constructor({ pointContainer , pointsModel}) {
    this.#pointContainer = pointContainer ;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#listPoints = [...this.#pointsModel.points];
    render(new ListFilterView(), this.#pointContainer );
    render(new ListSortView(), tripEventsElement);
    render(this.#tripComponent, tripEventsElement);

    this.#listPoints.forEach((point) => this.#renderPoint(point));
  }

  #renderPoint(point){
    const pointComponent = new PointView({point});
    const pointEditComponent = new EditPointView({point});

    const pointRollupBtn = pointComponent.element.querySelector('.event__rollup-btn');
    const editPointForm = pointEditComponent.element.querySelector('form');
    const editRollupBtn = editPointForm.querySelector('.event__rollup-btn');

    const replacePointToForm = () => {
      this.#tripComponent.element.replaceChild(pointEditComponent.element, pointComponent.element);
      editRollupBtn.addEventListener('click', onCloseEditForm);
      editPointForm.addEventListener('submit', onCloseEditForm);
      document.addEventListener('keydown', onEscKeyDown);
    };

    const replaceFormToPoint = () => {
      this.#tripComponent.element.replaceChild(pointComponent.element, pointEditComponent.element);
      document.removeEventListener('keydown', onEscKeyDown);
    };

    function onEscKeyDown (evt) {
      if (isEscapeKey) {
        onCloseEditForm(evt);
      }
    }

    pointRollupBtn.addEventListener('click', () => {
      replacePointToForm();
    });

    function onCloseEditForm(evt){
      evt.preventDefault();
      replaceFormToPoint();
    }

    render(pointComponent, this.#tripComponent.element);
  }
}
