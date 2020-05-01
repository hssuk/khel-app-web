import generateRandom from './generateRandom.js';
import filter from './filter.js';

export default function khel() {
  const elRandom = document.querySelector("#genrateRandom");
  const elFilter = document.querySelectorAll("input[name='type']");

  async function getKhel() {
    const response = await fetch('khel.json');
    const data = await response.json();
    return data;
  }

  getKhel().then(function(data){
    displayKhel(data);
  }).catch(err => {
    console.log(err)
  });

  function getRandom() {
    getKhel().then(function(data){
      displayKhel(data,'random');
    })
  }

  function getFiltered(arrFilter) {
    getKhel().then(function(data){
      displayKhel(data,'filter', arrFilter);
    })
  }

  function displayKhel(data, action = 'all', filter = null) {
    const element = document.querySelector('#khelList');
    let types = Object.getOwnPropertyNames(data);
    const khelArr = [];
    let khelLength;

    switch(action) {
      case 'all':
        types.map(type => {
          khelLength = data[type].khel.length;
          khelArr.push(`<h3>${type}</h3>`);
          for(let i=0;i<khelLength;i++) {
            khelArr.push(
              `<div class="khel">
                ${data[type].khel[i].name}
              </div>`
            )
          }
        });
        break;
      case 'random':
        types.map(type => {
          khelLength = data[type].khel.length;
          let khelRandom = generateRandom(data[type].khel,2);
          khelArr.push(
            `<h3>${type}</h3>`
          )

          for(let i=0;i<khelRandom.length;i++) {
            khelArr.push(
              `<div class="khel">
                ${khelRandom[i].name}
              </div>`
            )
          }
        });
      break;
      case 'filter':
        types = filter;
        types.map(type => {
          khelLength = data[type].khel.length;
          khelArr.push(`<h3>${type}</h3>`);
          for(let i=0;i<khelLength;i++) {
            khelArr.push(
              `<div class="khel">
                ${data[type].khel[i].name}
              </div>`
            )
          }
        });
      break;
    }
    element.innerHTML = khelArr.join(' ');
  }

  elRandom.addEventListener('click', function() {
    getRandom();
  });

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

}
