// Пример 3 - Поле
// Сделайте поле из белых клеточек 4x4
// При клике на клеточку она должна менять цвет
// с белого на черный,
// с черного на белый
// Под таблицей должна быть кнопка «поменять цвета».
// При ее нажатии все цвета клеточек меняются
// на противоположные.

const parent = document.querySelector('.parent');
const btn = document.querySelector('.btn-reverse-colors');

parent.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) return;

  e.target.classList.toggle('active');
});

btn.addEventListener('click', (e) => {
  parent.classList.toggle('reversed');
});
