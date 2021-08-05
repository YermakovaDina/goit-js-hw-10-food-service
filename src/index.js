import menuCardTpl from './templates/card-template.hbs';
import menu from './menu.json';

const menuCards = document.querySelector('ul.js-menu');
const cardsMarkup = createMenuCardTpl(menu);
menuCards.insertAdjacentHTML('beforeend', cardsMarkup);
menuRef.innerHTML = menuCardTpl(menu);
console.log(menuRef);

function createMenuCardTpl(menu) {
  return menuCardTpl(menu);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
