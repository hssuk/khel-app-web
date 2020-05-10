import generateRandom from './generateRandom.js';
import 'regenerator-runtime/runtime';

export default function khel() {
  const data = require('../data/khel.json');
  const elRandom = document.querySelector("#genrateRandom");
  const element = document.querySelector('#khelList');
  let types = Object.getOwnPropertyNames(data);

  function getAll() {
    let khelArr = [];
    types.map(type => {
      khelArr.push(
        `<h3>${type}</h3>`
      );

      const khelLength = data[type].khel.length;
      for(let i=0;i<khelLength;i++) {
        khelArr.push(
          `<div class="khel">
            ${data[type].khel[i].name}
          </div>`
        )
      }
    });

    displayKhel(khelArr);
  }

  function getRandom() {
    let khelArr = [];
    types.map(type => {
      khelArr.push(
        `<h3>${type}</h3>`
      )

      let khelRandom = generateRandom(data[type].khel,2);
      for(let i=0;i<khelRandom.length;i++) {
        khelArr.push(
          `<div class="khel">
            ${khelRandom[i].name}
          </div>`
        )
      }
    });

    displayKhel(khelArr);
  }

  function getFiltered(arrFilter) {
    let khelArr = [];
    types = arrFilter;
    types.map(type => {
      const khelLength = data[type].khel.length;
      khelArr.push(`<h3>${type}</h3>`);
      for(let i=0;i<khelLength;i++) {
        khelArr.push(
          `<div class="khel">
            ${data[type].khel[i].name}
          </div>`
        )
      }
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
        arrFilter.push(e.target.value)
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
