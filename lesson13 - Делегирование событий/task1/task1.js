// 1 - Дан блок, внутри кнопка.
// При наведении на кнопку, красить блок в красный цвет

// const card = document.querySelector('.card');
// const cardDeleteBtn = document.querySelector('.card__delete');

// cardDeleteBtn.addEventListener('mouseover', () => {
//   card.classList.add('active');
// });

// cardDeleteBtn.addEventListener('mouseleave', () => {
//   card.classList.remove('active');
// });

const card = document.querySelector('.card');

card.addEventListener('mouseover', (event) => {
  if (event.target === event.currentTarget) return;

  // if (event.target.classList.contains('card__delete')) {
  //   event.currentTarget.classList.add('active');
  // }

  if (event.target.dataset.action === 'close') {
    event.currentTarget.classList.add('active');
  }
});

card.addEventListener('mouseout', (event) => {
  if (event.target === event.currentTarget) return;

  if (event.target.dataset.action === 'close') {
    event.currentTarget.classList.remove('active');
  }
});
