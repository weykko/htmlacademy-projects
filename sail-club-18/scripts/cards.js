let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

gridViewButton.onclick = function () {
  cardsList.classList.remove('list');
  gridViewButton.classList.add('active');
  listViewButton.classList.remove('active');
};

listViewButton.onclick = function () {
  cardsList.classList.add('list');
  listViewButton.classList.add('active');
  gridViewButton.classList.remove('active');
};