/*
  Display all items from the items array
  Itesm array consists of a list of khel and the html
*/

import toggleClass from './toggleClass.js';

export default function displayItems(items) {
  const elementKL = document.querySelector('.khel-list');
  elementKL.innerHTML = items.join(' ');
  toggleClass();
}
