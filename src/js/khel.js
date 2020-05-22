import generateRandom from './generateRandom.js';
import 'regenerator-runtime/runtime';

export default function khel() {
  const data = require('../data/khel.json');
  const elRandom = document.querySelector("#genrateRandom");
  const element = document.querySelector('.khel-list');
  let types = Object.getOwnPropertyNames(data);

  function buildArray(data) {
    return `<div class="card">
      <div class="card__khel-name">${data.name}</div>
      <div class="card__khel-meaning">Meaning: ${data.meaning}</div>
      <div class="card__khel-aim">Aim: ${data.aim}</div>
      <div class="card__khel-description">${data.description}</div>
    </div>`;
  }

  function getAll() {
    let khelArr = [];

    types.map(type => {
      khelArr.push(
        `<h3>${type}</h3>`
      );
      data[type].khel.map(khel => {
        khelArr.push(
          buildArray(khel)
        );
      });
    });

    displayKhel(khelArr);
  }

  function getRandom() {
    let khelArr = [];

    types.map(type => {
      khelArr.push(
        `<h3>${type}</h3>`
      );

      const khelRandom = generateRandom(data[type].khel,2);

      khelRandom.map(khel => {
        khelArr.push(
          buildArray(khel)
        );
      });
    });

    displayKhel(khelArr);
  }

  function getFiltered(arrFilter) {
    let khelArr = [];
    types = arrFilter;
    types.map(type => {
      khelArr.push(
        `<h3>${type}</h3>`
      );

      data[type].khel.map(khel => {
        khelArr.push(
          buildArray(khel)
        );
      });
    });

    displayKhel(khelArr);
  }

  function displayKhel(items) {
    element.innerHTML = items.join(' ');
  }

  elRandom.addEventListener('click', function() {
    getRandom();
  });

  const elFilter = document.querySelectorAll("input[name='type']");
  let arrFilter = [];
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

  getAll();
}
