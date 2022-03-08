// const btnFirst = document.querySelector('.btn-first');
// const btnSecond = document.querySelector('.btn-second');
// const btnThird = document.querySelector('.btn-third');

// btnFirst.addEventListener('click', () => {
//   alert('Вы нажали на кнопку 1');
// });

// btnSecond.addEventListener('click', () => {
//   alert('Вы нажали на кнопку 2');
// });

// btnThird.addEventListener('click', () => {
//   alert('Вы нажали на кнопку 3');
// });

const parentDiv = document.querySelector('.wrapper');

parentDiv.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) return;

  alert(`Вы нажали на ${event.target.textContent}`);
});
