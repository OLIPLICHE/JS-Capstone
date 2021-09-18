import API from '../data';
import involvement from '../involvement';
import comment from './comments';

const ul = document.getElementById('meal-list');
const commentModal = document.getElementById('modal-comment');

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
