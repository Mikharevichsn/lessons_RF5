// 7 - Потомки
// Дан элемент #unique-list.
// Найдите первого потомка этого элемента
// и сделайте его текст красного цвета.

const uniqueList = document.querySelector('#unique-list');

// console.log((uniqueList.children[0].style.color = '#f00'));
console.log((uniqueList.firstElementChild.style.color = '#f00'));
