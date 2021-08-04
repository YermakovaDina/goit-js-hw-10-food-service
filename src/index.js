import './styles.css';
import menu from './menu.json';
import menuTemplatesCard from './templates/card-template.hbs';

menuRef.insertAdjacentHTML('beforeend', menuTemplatesCard(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// const checkbox = document.querySelector('#theme-switch-toggle');
// const bodyEl = document.querySelector('body');
// const menuRef = document.querySelector('.js-menu');

// if (localStorage.theme === Theme.DARK) {
//   checkbox.checked = true;
//   bodyEl.classList.add(Theme.DARK);
// }

// checkbox.addEventListener('change', onCheckboxChange);
// function onCheckboxChange(e) {
//   if (checkbox.checked === true) {
//     bodyEl.classList.add(Theme.DARK);
//     bodyEl.classList.remove(Theme.LIGHT);
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     bodyEl.classList.add(Theme.LIGHT);
//     bodyEl.classList.remove(Theme.DARK);
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }

// === добавление карточек ===
// const menuRef = document.querySelector('ul.js-menu'); // доступ к списку карточек
// menuRef.innerHTML = menuTemplatesCard(menu); // добавляем карточки
// console.log(menuRef);
