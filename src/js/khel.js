/*
  Set and display khel
  Set event listeners
  Methods:
    Generate random list
    Filter by category e.g. individual, team, sitting down etc.
*/

import generateRandom from './generateRandom.js';
import 'regenerator-runtime/runtime';
import { setShareList, getShareList } from './share.js';
import setHtmlArray from './setHtmlArray.js';
import displayItems from './displayItems.js';

export default function khel() {
  const data = require('../data/khel.json');
  const elRandom = document.querySelector("#genrateRandom");
  const elFilter = document.querySelectorAll(".categories__input");
  let types = Object.getOwnPropertyNames(data);
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

  elRandom.addEventListener('click', function() {
    getRandom();
  });

  function getAll() {
    let khelArr = [];
    let shareArr = [];

    types.map(type => {
      khelArr.push(
        `<h3 class='category-title'>${type}</h3>`
      );
      data[type].khel.map( khel => {
        setHtmlArray(khel, khelArr);
        setShareList(khel, shareArr);
      });
    });

    displayItems(khelArr);
    getShareList(shareArr);
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
        setHtmlArray(khel, khelArr);
        setShareList(khel, shareArr);
      });
    });

    displayItems(khelArr);
    getShareList(shareArr);
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
        setHtmlArray(khel, khelArr);
        setShareList(khel, shareArr);
      });
    });

    displayItems(khelArr);
    getShareList(shareArr);
  }

  getAll();

}
