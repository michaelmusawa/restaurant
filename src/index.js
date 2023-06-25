import './style.css';
import menu from './menu.js';
import info from './info.js';
import pageLoad from './page_load.js';

function navBar() {
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  const btnHome = document.createElement('button');
  btnHome.classList.add('home');
  btnHome.innerHTML = 'Home';

  const btnMenu = document.createElement('button');
  btnMenu.classList.add('menu');
  btnMenu.innerHTML = 'Menu';

  const btnInfo = document.createElement('button');
  btnInfo.classList.add('info');
  btnInfo.innerHTML = 'Contact';

  navBar.appendChild(btnHome);
  navBar.appendChild(btnMenu);
  navBar.appendChild(btnInfo);

  document.body.appendChild(navBar);
}

navBar();

const buttons = document.querySelectorAll('.home, .menu, .info');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    clearBody();
    navBar();
    button.classList.add('sunken');

    if (button.classList.contains('home')) {
      pageLoad();
    } else if (button.classList.contains('menu')) {
      menu();
    } else if (button.classList.contains('info')) {
      info();
    }
  });
});

function clearBody() {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.lastChild);
  }
}

pageLoad();
