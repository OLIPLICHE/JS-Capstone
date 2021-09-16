import './style.css';

import API from './modules/data';
import renderMeals from './modules/app';

const endpoint = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const likesEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/';
const displayMeals = () => {
  Promise.all([
    API.getMeals(`${endpoint}`),
    API.getLikes(likesEndpoint),
  ]).then((data) => {
    renderMeals(data[0], data[1]);
  });
};

window.addEventListener('load', displayMeals);
