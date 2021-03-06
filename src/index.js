import menuCardTpl from './templates/card-template.hbs';
import menu from './menu.json';

const menuCards = document.querySelector('ul.js-menu');

const checkbox = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// -- добавление карточек --
menuCards.insertAdjacentHTML('beforeend', menuCardTpl(menu));
//console.log(menuCards);

// -- изменение темы --
if (localStorage.theme === Theme.DARK) {
  checkbox.checked = true;
  bodyRef.classList.add(Theme.DARK);
}

checkbox.addEventListener('change', onChangeAction);

function onChangeAction() {
  if (checkbox.checked === true) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
