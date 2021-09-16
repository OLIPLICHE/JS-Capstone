/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const ul = document.getElementById('meal-list');
const renderMeals = (mealsData) => {
  console.log(mealsData);
  const { meals } = mealsData;
  console.log(meals);

  meals.forEach((mealItem, id) => {
    const li = document.createElement('li');
    li.className = 'meal-item';

    const img = document.createElement('img');
    img.src = mealItem.strMealThumb;

    img.className = 'meal-image';
    li.appendChild(img);

    const div = document.createElement('div');
    div.className = 'meal-meta';

    li.appendChild(div);
    const p = document.createElement('p');
    p.className = 'meal-title';
    p.innerText = mealItem.strMeal;
    div.appendChild(p);

    const likeBtn = document.createElement('button');
    likeBtn.className = 'icn-btn';
    div.appendChild(likeBtn);

    const likeIcon = document.createElement('i');
    likeIcon.className = 'far fa-heart';
    likeBtn.appendChild(likeIcon);

    const commentBtn = document.createElement('button');
    commentBtn.addEventListener('click', () => {
      const div = document.createElement('div');
      div.className = 'modal';
      div.id = 'modal';
      const divInner = document.createElement('div');
      divInner.className = 'modal-content';
      const image = document.createElement('IMG');
      image.className = 'modal-image';
      image.src = mealItem.strMealThumb;
      const divDescription = document.createElement('div');
      const name = document.createElement('h2');
      name.innerHTML = mealItem.strMeal.toUpperCase();
      ul.appendChild(div);
      div.appendChild(divInner);
      divInner.appendChild(image);
      divInner.appendChild(divDescription);
      divDescription.appendChild(name);
    })
    commentBtn.className = 'btn';
    commentBtn.innerText = 'Comment';
    li.appendChild(commentBtn);

    // const reserveBtn = document.createElement('button');
    // reserveBtn.className = 'btn btn-alt';
    // reserveBtn.innerText = 'Reserve';
    // li.appendChild(reserveBtn);
    ul.appendChild(li);
  });
};

const renderModal = () => {};

export { renderMeals, renderModal };
