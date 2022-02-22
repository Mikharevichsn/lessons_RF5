// 5 - Вставка элементов через insertBefore
// Дан элемент ul, а в нем li #third-item.
// Вставьте перед элементом #third-item новую li с текстом '!!!'.

const thirdItem = document.querySelector('#third-item');

const NEW_ITEM = '<li>!!!</li>';

thirdItem.insertAdjacentHTML('beforebegin', NEW_ITEM);
