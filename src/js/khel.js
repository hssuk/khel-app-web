/*
  Set and display khel
  Set event listeners
  Methods:
    Generate random list
    Filter by category e.g. individual, team, sitting down etc.
*/

import generateRandom from './generateRandom.js';
import 'regenerator-runtime/runtime';
import setHtmlArray from './setHtmlArray.js';
import { setShareList, getShareList } from './share.js';
import displayItems from './displayItems.js';

export default function khel() {
  const data = require('../data/khel.json');
  const elRandom = document.querySelector("#genrateRandom");
  const elFilter = document.querySelectorAll(".categories__input");
  let types = Object.getOwnPropertyNames(data);
  let khelArr = [];
  let shareArr = [];
  let filterArr = [];

  for(let i=0; i < elFilter.length; i++) {
    elFilter[i].addEventListener('click', function(e) {
      if(e.target.checked) {
        filterArr.push(e.target.value);
      }
      if(!e.target.checked) {
        if(filterArr.indexOf(e.target.value) === 0) {
          filterArr.shift();
        } else {
          filterArr.splice(filterArr.indexOf(e.target.value),1);
        }
      }
      getFiltered(filterArr);
    });
  }

  elRandom.addEventListener('click', function() {
    getRandom();
  });

  function getAll() {
    types.map(type => {
      khelArr.push(
        `<h3 class='category-title'>${type}</h3>`
      );
      data[type].khel.map( khel => {
        setHtmlArray(khel, khelArr);
        setShareList(khel, shareArr);
      });
    });

    getShareList(shareArr);
    displayItems(khelArr);
  }

  function getRandom() {
    khelArr = [];
    shareArr = [];

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

  function getFiltered(filterArr) {
    khelArr = [];
    shareArr = [];

    if(filterArr.length > 0) {
      types = filterArr;

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
    } else {
      location.reload();
    }
  }

  getAll();

}
