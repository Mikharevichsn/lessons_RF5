// Пример 3 - Свойство tagName
// Дан элемент #elem.
// Выведите название его тега.

const block = document.querySelector('#elem');

console.dir(block);

// Выведите название его тега в нижнем регистре.

console.log(block.tagName.toLocaleLowerCase());
// console.log(block.tagName.__proto__);

// Даны элементы с классом www.
// Добавьте каждому элементу в
// конец название его тега в нижнем регистре.

const elements = document.querySelectorAll('.www');

elements.forEach((elem) => {
  // elem.innerText += ' ' + block.tagName.toLocaleLowerCase();
  // elem.textContent += ' ' + block.tagName.toLocaleLowerCase();
  elem.textContent += ` ${block.tagName.toLocaleLowerCase()}`;
});
