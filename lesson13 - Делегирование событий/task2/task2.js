// Пример 2 - Вывести 4 красных квадрата,
// при клике на любой, он становиться зеленым,
// при этом если есть уже зеленый квадрат,
// то он становится обратно красным и так можно кликать на любой квадрат,
// он становиться зеленым, а старый зеленый квадрат обратно крассным и тд.

const parent = document.querySelector('.parent');

parent.addEventListener('click', (e) => {
  if (e.currentTarget === e.target) return;

  console.log('e.currentTarget.children = ', e.currentTarget.children);

  // [...e.currentTarget.children].forEach((child) => {
  //   child.classList.remove('active');
  // });

  const children = e.currentTarget.children;
  const blocks = [...children];
  blocks.forEach((child) => {
    // if (child === e.target) return;
    // child.classList.remove('active');

    if (child !== e.target) {
      child.classList.remove('active');
    }
  });

  e.target.classList.toggle('active');
});
