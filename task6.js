// 6 - Создание элементов
// Дан массив. Создайте ul через createElement,
// затем вставьте каждый элемент этого массива в отдельную li внутри этой ul,
// затем вставьте эту ul в конец body.

const body = document.querySelector('body');

const arr = ['Toyota', 'Honda', 'Lada', 'Ford', 'Жигуль'];

const list = document.createElement('ul');
// arr.forEach((car) => {
//   const item = document.createElement('li');
//   item.textContent = car;
//   list.append(item);
// });

const cars = arr.map((car) => {
  const item = document.createElement('li');
  item.textContent = car;

  return item;
});

list.append(...cars);

body.append(list);
// document.body.append(list);
