import { render, RenderPosition } from '../render.js';
import { isEscapeKey } from '../utils.js';

// Наш контейнер для отрисовки
import PointListView from '../view/point-list-view.js';
// Контейнер для сортировки
import ListSortView from '../view/list-sort-view.js';
// Форма редактирования
import EditPointView from '../view/edit-point-view.js';
// Точка маршрута
import PointView from '../view/trip-point-view.js';
// Форма создания
import NewPointView from '../view/new-point-view.js';
// Пустой список
//import ListEmptyView from '../view/list-empty-view.js';


export default class TripPresenter {
  #pointListComponent = new PointListView();

  #pointsContainer = null;
  #pointsModel = null;
  #listPoints = [];

  constructor({pointsContainer, pointsModel}) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#listPoints = [...this.#pointsModel.points];

    this.#renderPointsList();
  }

  #renderPointsList() {
    // Если ничего нет - вьюшка с надписью
    //if (!this.#listPoints.length) {
    //render(new ListEmptyView(), this.#pointsContainer);
    //return;
    //}

    render(new ListSortView(), this.#pointsContainer);
    render(this.#pointListComponent, this.#pointsContainer);
    render(new NewPointView(), this.#pointListComponent.element, RenderPosition.AFTERBEGIN);

    this.#listPoints.forEach((point) => this.#renderPoint(point));
  }


  #renderPoint(point) {
    const pointComponent = new PointView({point});
    const pointEditComponent = new EditPointView({point});

    const pointRollupBtn = pointComponent.element.querySelector('.event__rollup-btn');
    const editPointForm = pointEditComponent.element.querySelector('form');
    const editRollupBtn = editPointForm.querySelector('.event__rollup-btn');

    const replacePointToEditForm = () => {
      this.#pointListComponent.element.replaceChild(pointEditComponent.element, pointComponent.element);
      editRollupBtn.addEventListener('click', onCloseEditPointForm);
      editPointForm.addEventListener('submit', onCloseEditPointForm);
      document.addEventListener('keydown', onEscKeyDown);
    };

    const replaceEditFormToPoint = () => {
      this.#pointListComponent.element.replaceChild(pointComponent.element, pointEditComponent.element);
      editRollupBtn.removeEventListener('click', onCloseEditPointForm);
      editPointForm.removeEventListener('submit', onCloseEditPointForm);
      document.removeEventListener('keydown', onEscKeyDown);
    };

    function onEscKeyDown(evt) {
      if (isEscapeKey) {
        onCloseEditPointForm(evt);
      }
    }

    function onCloseEditPointForm (evt) {
      evt.preventDefault();
      replaceEditFormToPoint();
    }

    pointRollupBtn.addEventListener('click', () => {
      replacePointToEditForm();
    });

    render(pointComponent, this.#pointListComponent.element);
  }
}
