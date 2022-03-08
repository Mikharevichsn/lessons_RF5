// 4 - Вставка элементов через appendChild
// Дан ol. Вставьте ему в конец li с текстом 'пункт'.

// const list = document.querySelector('ol');
const list = document.querySelector('.list');

// console.log(list.innerHTML);

// const item = document.createElement('li');
// console.log('🚀 ~ file: task4.js ~ line 9 ~ item', item);

// item.textContent = 'пункт';
// list.append(item);

const li = '<li>пункт</li>';
// list.innerHTML += li;
// list.innerHTML += li;
// list.innerHTML += li;
// list.innerHTML += li;
// list.innerHTML += li;
// list.innerHTML += li;

// list.insertAdjacentHTML('beforeend', li);
// list.insertAdjacentHTML('beforeend', li);
// list.insertAdjacentHTML('beforeend', li);
// list.insertAdjacentHTML('beforeend', li);

// Дан ul. Дан массив.
// Вставьте элементы этого массива в конец ul так,
// чтобы каждый элемент стоял в своем li.

const arr = ['Хлеб', 'Кукуруза', 'Молоко', 'Масло'];

const unorderedList = document.querySelector('.unordered-list');

arr.forEach((productName) => {
  const listItem = document.createElement('li');
  listItem.textContent = productName;
  unorderedList.append(listItem);
});
