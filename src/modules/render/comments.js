import API from '../data';
import counter from '../counter';

const modal = document.getElementById('modal-comment');

const displayComments = (ul, userComment) => {
  const comment = document.createElement('li');
  comment.className = 'comment-li';
  const commentMeta = document.createElement('div');
  commentMeta.className = 'comment-meta';
  comment.appendChild(commentMeta);
  const name = document.createElement('p');
  name.style.textTransform = 'Capitalize';
  name.innerText = userComment.username;

  const date = document.createElement('p');
  date.className = 'no-comments';
  date.innerText = userComment.creation_date;
  commentMeta.appendChild(name);
  commentMeta.appendChild(date);
  const message = document.createElement('p');
  message.innerText = userComment.comment;
  message.style.textTransform = 'Capitalize';
  comment.appendChild(message);
  ul.appendChild(comment);
};

const commentModal = (meal) => {
  const modalInner = document.createElement('div');
  modalInner.className = 'modal-inner';
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  modalInner.appendChild(modalHeader);
  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-modal icn-btn';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modalHeader.appendChild(closeBtn);
  const modalDetails = document.createElement('div');
  modalDetails.className = 'modal-details';
  modalInner.appendChild(modalDetails);
  const modalImg = document.createElement('img');
  modalImg.className = 'modal-img';
  modalImg.src = meal.strMealThumb;
  modalDetails.appendChild(modalImg);
  const modalMeta = document.createElement('div');
  modalMeta.className = 'modal-meta';
  modalDetails.appendChild(modalMeta);
  const modalTitle = document.createElement('h4');
  modalTitle.className = 'modal-title';
  modalTitle.innerText = meal.strMeal;
  modalMeta.appendChild(modalTitle);
  const modalDesc = document.createElement('p');
  modalDesc.className = 'modal-desc';
  modalDesc.innerText = meal.strInstructions;
  modalMeta.appendChild(modalDesc);

  const allComments = document.createElement('div');
  allComments.className = 'all-comments';
  modalMeta.appendChild(allComments);
  const allCommentsTitle = document.createElement('h1');
  allCommentsTitle.className = 'all-comments-title';
  allCommentsTitle.innerText = 'All Comments';
  allComments.appendChild(allCommentsTitle);
  const commentUl = document.createElement('ul');
  commentUl.className = 'comment-ul';
  API.getComments(meal.idMeal).then((data) => {
    if (data === 'No comments available for this meal') {
      commentUl.innerHTML = `<li class="no-comments">${`${data}. Add a new comment`}</li>`;
    } else {
      const commentCounter = counter.comments(data);
      allCommentsTitle.innerText = `All Comments(${commentCounter})`;
      data.forEach((userComment) => {
        displayComments(commentUl, userComment);
      });
    }
  });
  allComments.appendChild(commentUl);
  const form = document.createElement('form');
  form.className = 'comment-form';
  modalMeta.appendChild(form);
  const formTitle = document.createElement('h1');
  formTitle.className = 'comment-form-title';
  formTitle.innerText = 'Add a comment';
  form.appendChild(formTitle);
  const commenterName = document.createElement('input');
  commenterName.type = 'text';
  commenterName.name = 'commenter';
  commenterName.placeholder = 'Your Name';
  commenterName.attributes.required = true;
  form.appendChild(commenterName);
  const commenterMessage = document.createElement('textarea');
  commenterMessage.rows = 5;
  commenterMessage.className = 'comment-message';
  commenterMessage.placeholder = 'Your Message';
  form.appendChild(commenterMessage);
  const formButton = document.createElement('button');
  formButton.className = 'btn btn-alt';
  formButton.innerHTML = 'Add Comment';
  form.appendChild(formButton);
  formButton.onclick = (e) => {
    e.preventDefault();
    API.postComment(
      meal.idMeal,
      commenterName.value,
      commenterMessage.value,
    ).then(() => {
      if (commentUl.hasChildNodes()) {
        commentUl.innerHTML = '';
        API.getComments(meal.idMeal).then((data) => {
          if (data === 'No comments available for this meal') {
            commentUl.innerHTML = `<li class="no-comments">${`${data}. Add a new comment`}</li>`;
          } else {
            data.forEach((userComment) => {
              displayComments(commentUl, userComment);
            });
          }
        });
      }
    });
    commenterName.value = '';
    commenterMessage.value = '';
  };

  modal.appendChild(modalInner);
};

export default commentModal;