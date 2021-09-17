/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import API from '../data';
import involvement from '../involvement';
import comment from './comments';

const ul = document.getElementById('meal-list');
const commentModal = document.getElementById('modal-comment');

// const renderModal = (meal) => {
//   const modalInner = document.createElement('div');
//   modalInner.className = 'modal-inner';

//   const modalHeader = document.createElement('div');
//   modalHeader.className = 'modal-header';
//   modalInner.appendChild(modalHeader);

//   const closeBtn = document.createElement('button');
//   closeBtn.className = 'close-modal icn-btn';
//   closeBtn.innerHTML = '&times;';
//   closeBtn.addEventListener('click', () => {
//     commentModal.style.display = 'none';
//   });
//   modalHeader.appendChild(closeBtn);

//   const modalDetails = document.createElement('div');
//   modalDetails.className = 'modal-details';
//   modalInner.appendChild(modalDetails);

//   const modalImg = document.createElement('img');
//   modalImg.className = 'modal-img';
//   modalImg.src = meal.strMealThumb;
//   modalDetails.appendChild(modalImg);

//   const modalMeta = document.createElement('div');
//   modalMeta.className = 'modal-meta';
//   modalDetails.appendChild(modalMeta);

//   const modalTitle = document.createElement('h4');
//   modalTitle.className = 'modal-title';
//   modalTitle.innerText = meal.strMeal;
//   modalMeta.appendChild(modalTitle);

//   const modalDesc = document.createElement('p');
//   modalDesc.className = 'modal-desc';
//   modalDesc.innerText = meal.strInstructions;
//   modalMeta.appendChild(modalDesc);
//   commentModal.appendChild(modalInner);
// };

const meals = (mealsData, likesData) => {
  const { meals } = mealsData;

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

    const likeSection = document.createElement('div');
    likeSection.className = 'like-section';
    div.appendChild(likeSection);
    const likeBtn = document.createElement('button');
    likeBtn.className = 'icn-btn like-btn';

    likeSection.appendChild(likeBtn);
    const likeIcon = document.createElement('i');
    likeIcon.className = 'far fa-heart';

    likeBtn.appendChild(likeIcon);
    const likeCount = document.createElement('p');
    likeCount.className = 'like-count';
    likeCount.innerText = involvement.likes(likesData, mealItem.idMeal);
    likeBtn.onclick = async () => {
      await API.postLike(mealItem.idMeal);
      const likesData = await API.getLikes().then((data) => data);
      likeCount.innerText = involvement.likes(likesData, mealItem.idMeal);
    };
    likeSection.appendChild(likeCount);

    const commentBtn = document.createElement('button');
    commentBtn.className = 'btn';
    commentBtn.innerText = 'Comment';
    commentBtn.addEventListener('click', () => {
      if (commentModal.hasChildNodes()) {
        commentModal.innerHTML = '';
      } else {
        comment(mealItem);
        commentModal.style.display = 'block';
      }
    });
    li.appendChild(commentBtn);
    ul.appendChild(li);
  });
};

export default meals;
