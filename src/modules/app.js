/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const ul = document.getElementById('meal-list');
const renderMeals = (mealsData) => {
  console.log(mealsData);
  const { meals } = mealsData;
  console.log(meals);

  meals.forEach((mealItem) => {
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
      const divInner = document.createElement('div');
      divInner.className = 'modal-content'
      ul.appendChild(div)
      div.appendChild(divInner)
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
