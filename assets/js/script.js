// Dark theme

const body = document.querySelector('body');
const themeSwitcher = document.querySelector('.theme-switch__checkbox');

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('darkMode');
});


