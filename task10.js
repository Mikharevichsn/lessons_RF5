// добавьте div с бордером
// добавьте кнопку
// при нажатии на кнопку добавляется/убавляется класс, который перекрашивает div

const div = document.createElement('div');
const button = document.createElement('button');
button.setAttribute('type', 'button');
// button.type = 'button';
button.textContent = 'Кнопка';

div.style.width = '500px';
div.style.height = '100px';
div.style.border = '1px dashed #00f';
div.style.transition = '1s';

button.addEventListener('click', () => {
  div.classList.toggle('wrapper-bg');
});

document.body.append(div);
document.body.append(button);
