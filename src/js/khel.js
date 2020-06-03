import generateRandom from './generateRandom.js';
import 'regenerator-runtime/runtime';
import toggleClass from './toggleClass.js';

export default function khel() {
  const data = require('../data/khel.json');
  const elementKL = document.querySelector('.khel-list');
  const elRandom = document.querySelector("#genrateRandom");
  const elFilter = document.querySelectorAll(".categories__input");
  let types = Object.getOwnPropertyNames(data);
  let arrFilter = [];

  elRandom.addEventListener('click', function() {
    getRandom();
  });

  for(let i=0; i < elFilter.length; i++) {
    elFilter[i].addEventListener('click', function(e) {
      if(e.target.checked) {
        arrFilter.push(e.target.value);
      }
      if(!e.target.checked) {
        if(arrFilter.indexOf(e.target.value) === 0) {
          arrFilter.shift();
        } else {
          arrFilter.splice(arrFilter.indexOf(e.target.value),1);
        }
      }
      getFiltered(arrFilter);
    });
  }

  function buildArray(data, arr) {
    arr.push(
      `<div class="card">
        <div class="card__khel-name">
          <span class="title">${data.name}</span>
          <span class="icon-info"></span>
        </div>
        <div class="card__khel-meaning">
          <span class="title">Meaning</span>
          <span class="text">${data.meaning}<span>
        </div>
        <div class="card__khel-aim">
          <span class="title">Aim</span>
          <span class="text">${data.aim}</span>
        </div>
        <div class="card__khel-description">
          <span class="title">Rules</span>
          <span class="text">${data.description}</span>
        </div>
      </div>`
    )

    return arr;
  }

  function getAll() {
    let khelArr = [];

    types.map(type => {
      khelArr.push(
        `<h3 class='category-title'>${type}</h3>`
      );
      data[type].khel.map( khel => {
        buildArray(khel, khelArr)
      });
    });

    displayKhel(khelArr);
  }

  function getRandom() {
    let khelArr = [];

    types.map(type => {
      khelArr.push(
        `<h3 class='category-title'>${type}</h3>`
      );

      const khelRandom = generateRandom(data[type].khel,2);

      khelRandom.map(khel => {
        buildArray(khel, khelArr)
      });
    });

    displayKhel(khelArr);
  }

  function getFiltered(arrFilter) {
    let khelArr = [];
    types = arrFilter;

    types.map(type => {
      khelArr.push(
        `<h3 class='category-title'>${type}</h3>`
      );
      data[type].khel.map(khel => {
        buildArray(khel, khelArr)
      });
    });

    displayKhel(khelArr);
  }

  function displayKhel(items) {
    elementKL.innerHTML = items.join(' ');
    toggleClass();
  }

  getAll();
}
