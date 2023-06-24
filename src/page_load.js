
import womanImage from './woman.jpg';


export default function pageLoad() {
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  const btnHome = document.createElement('button');
  btnHome.classList.add('home');
  btnHome.innerHTML = 'Home';

  const btnMenu = document.createElement('button');
  btnMenu.classList.add('menu');
  //btnInfo.id = 'menu';
  btnMenu.innerHTML = 'Menu';

  const btnInfo = document.createElement('button');
  btnInfo.classList.add('info');
  //btnInfo.id = 'info';
  btnInfo.innerHTML = 'Contact';

  navBar.appendChild(btnHome);
  navBar.appendChild(btnMenu);
  navBar.appendChild(btnInfo);

  document.body.appendChild(navBar);

  const header = document.createElement('div');
  header.classList.add('header');

  const heading = document.createElement('h1');
  heading.innerText = 'Killer Appetizer';

  const paragraph = document.createElement('p');
  paragraph.innerText = `Step into a culinary adventure like no other at our restaurant, where the aroma of authentic Kenyan cuisine fills the air. Welcome to the Killer Appetizer, where we take pride in serving you the finest selection of traditional Kenyan dishes that will tantalize your taste buds.
  Immerse yourself in a culinary journey that showcases the rich heritage and diverse flavors of Kenya. From mouthwatering nyama choma (grilled meat) to flavorful sukuma wiki (collard greens), our menu is a tribute to the vibrant and hearty dishes that have been passed down through generations.`;

  header.appendChild(heading);
  header.appendChild(paragraph);
  document.body.appendChild(header);

  const myImage = document.createElement('img');
  myImage.src = womanImage;
  myImage.alt = 'Woman Image';

  document.body.appendChild(myImage);

  

}
