
import womanImage from './woman.jpg';


export default function pageLoad() {

  const header = document.createElement('div');
  header.classList.add('header');

  const heading = document.createElement('h1');
  heading.innerText = 'Killer Appetizer';

  const main = document.createElement('div');
  main.classList.add('main');

  const paragraph = document.createElement('p');
  paragraph.innerText = `Step into a culinary adventure like no other at our restaurant, where the aroma of authentic Kenyan cuisine fills the air. Welcome to the Killer Appetizer, where we take pride in serving you the finest selection of traditional Kenyan dishes that will tantalize your taste buds.
  Immerse yourself in a culinary journey that showcases the rich heritage and diverse flavors of Kenya. From mouthwatering nyama choma (grilled meat) to flavorful sukuma wiki (collard greens), our menu is a tribute to the vibrant and hearty dishes that have been passed down through generations.`;

  header.appendChild(heading);
  
  document.body.appendChild(header);

  const myImage = document.createElement('img');
  myImage.src = womanImage;
  myImage.alt = 'Woman Image';

  main.appendChild(myImage);
  main.appendChild(paragraph);
  

  document.body.appendChild(main);

  

}
