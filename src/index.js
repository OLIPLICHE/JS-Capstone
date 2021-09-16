/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import './style.css';
import API from './modules/data';
import { renderMeals } from './modules/app';

const endpoint = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const displayMeals = () => {
  API.getMeals(`${endpoint}`).then((mealsData) => {
    renderMeals(mealsData);
  });
};

window.addEventListener('load', displayMeals);

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = "none";
    modal.id = 'none';
  }
}
