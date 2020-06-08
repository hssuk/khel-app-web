import toggleClass from './toggleClass.js';

export default function displayItems(items) {
  const elementKL = document.querySelector('.khel-list');
  elementKL.innerHTML = items.join(' ');
  toggleClass();
}
