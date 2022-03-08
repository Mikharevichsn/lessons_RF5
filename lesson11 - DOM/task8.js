// 8 - Соседи
// Дан элемент #prolog.
// Найдите его соседа сверху и добавьте ему в конец текст '!'.

const prolog = document.querySelector('#prolog');

// prolog.previousElementSibling.textContent += '!';
const previous = prolog.previousElementSibling;
previous.textContent += '!';

console.dir(prolog);
// previousElementSibling
// nextElementSibling

// Найдите его соседа снизу и добавьте ему в конец текст '?'.
const next = prolog.nextElementSibling;
next.textContent += '?';

// Найдите его соседа снизу его соседа снизу
// (следующий элемент за соседним) и добавьте ему в конец текст '#'.
next.nextElementSibling.textContent += '#';
// prolog.nextElementSibling.nextElementSibling.textContent += '#';
