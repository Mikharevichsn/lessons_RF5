// 4 - Раскрывающийся список

const root = document.querySelector('.root');

root.addEventListener('click', (e) => {
  if (e.target.tagName !== 'LI') return;

  if (e.target.classList.contains('uncollapsed')) {
    const uncollapsedLis = e.target.querySelectorAll('.uncollapsed');
    const arr = [...uncollapsedLis];
    arr.forEach((elem) => {
      elem.classList.remove('uncollapsed');
    });
  }

  e.target.classList.toggle('uncollapsed');
});
