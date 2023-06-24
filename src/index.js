import _ from 'lodash';
import './style.css';
import menu from './menu.js';
import info from './info.js';

import pageLoad from './page_load.js';

pageLoad();


const btn_menu = document.querySelector('#menu');
  btn_menu.addEventListener('click', () => {
  clearBody();
  menu(); // Call the menu function or add your menu functionality here
  });

  const btn_info = document.querySelector('#info');
  btn_info.addEventListener('click', () => {
  clearBody();
  info(); // Call the info function or add your info functionality here
  });

  function clearBody() {
    while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
    }
    
  } 

