// 1 - Классы
// Дан элемент #elem.

const elem = document.querySelector('#elem');
// const elem = document.getElementById('elem');
console.log(elem);
console.dir(elem);
// Добавьте ему класс www.

elem.classList.add('www');

// Удалите у него класс www.

// elem.classList.remove('www');

// Проверьте наличие у него класса www.

// const result = elem.classList.contains('www');
// console.log('result = ', result);
console.log(elem.classList.contains('www'));

// Добавьте ему класс www, если его нет и удалите - если есть.

// if (elem.classList.contains('www')) {
//   elem.classList.remove('www');
// } else {
//   elem.classList.add('www');
// }

// elem.classList.toggle('www');

elem.addEventListener('click', (event) => {
  // elem.classList.toggle('www');

  event.target.classList.toggle('www');

  // console.log('----');
  // console.log(elem === event.target);
  // console.log('----');
});

// Узнайте количество его классов.

const countClasses = elem.classList.length;
console.log('🚀 ~ file: task1.js ~ line 45 ~ countClasses', countClasses);
// Выведите последовательно алертом его классы.

elem.classList.forEach((item) => {
  alert(item);
});

// alert(elem.classList.toString());
// alert([...elem.classList].join(' --- '));
