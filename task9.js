// 9 - Родители
// Дан элемент #products.
// Найдите его родителя и покрасьте его в красный цвет.

// Найдите родителя его родителя и покрасьте его в синий цвет.

const products = document.querySelector('#products');

products.parentNode.style.backgroundColor = '#f00';
