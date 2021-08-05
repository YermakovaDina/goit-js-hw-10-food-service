import menuCardTpl from './templates/card-template.hbs';
import menu from './menu.json';

const menuCards = document.querySelector('ul.js-menu');

const checkbox = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menuCards.insertAdjacentHTML('beforeend', menuCardTpl(menu));
// console.log(menuCards);

if (localStorage.theme === Theme.DARK) {
  checkbox.checked = true;
  bodyRef.classList.add(Theme.DARK);
}

checkbox.addEventListener('change', onChangeAction);
function onChangeAction(e) {
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
