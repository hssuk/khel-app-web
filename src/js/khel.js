import generateRandom from './generateRandom.js';
import 'regenerator-runtime/runtime';
import toggleClass from './toggleClass.js';

export default function khel() {
  const data = require('../data/khel.json');
  const elementKL = document.querySelector('.khel-list');
  const elRandom = document.querySelector("#genrateRandom");
  const elReset = document.querySelector("#reset");
  const elFilter = document.querySelectorAll(".categories__input");
  const elWhatsapp = document.querySelector("#whatsapp");
  let types = Object.getOwnPropertyNames(data);
  let arrFilter = [];

  elRandom.addEventListener('click', function() {
    getRandom();
  });

  elReset.addEventListener('click', function() {
    location.reload();
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

  function buildHtmlArray(data, arr) {
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

  function buildShareListArray(data, arr) {
    arr.push(data.name);
    return arr;
  }

  function buildShareList(shareArr) {
    shareArr = shareArr.join('%0A');
    elWhatsapp.href = `whatsapp://send?text=*Khel%20List*%0A${shareArr}`;
  }

  function getAll() {
    let khelArr = [];
    let shareArr = [];

    types.map(type => {
      khelArr.push(
        `<h3 class='category-title'>${type}</h3>`
      );
      data[type].khel.map( khel => {
        buildHtmlArray(khel, khelArr);
        buildShareListArray(khel, shareArr);
      });
    });

    displayKhel(khelArr);
    buildShareList(shareArr);
  }

  function getRandom() {
    let khelArr = [];
    let shareArr = [];

    types.map(type => {
      khelArr.push(
        `<h3 class='category-title'>${type}</h3>`
      );

      const khelRandom = generateRandom(data[type].khel,2);

      khelRandom.map(khel => {
        buildHtmlArray(khel, khelArr);
        buildShareListArray(khel, shareArr);
      });
    });

    displayKhel(khelArr);
    buildShareList(shareArr);
  }

  function getFiltered(arrFilter) {
    let khelArr = [];
    let shareArr = [];
    types = arrFilter;

    types.map(type => {
      khelArr.push(
        `<h3 class='category-title'>${type}</h3>`
      );
      data[type].khel.map(khel => {
        buildHtmlArray(khel, khelArr);
        buildShareListArray(khel, shareArr);
      });
    });

    displayKhel(khelArr);
    buildShareList(shareArr);
  }

  function displayKhel(items) {
    elementKL.innerHTML = items.join(' ');
    toggleClass();
  }

  getAll();
}
