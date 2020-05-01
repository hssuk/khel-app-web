
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
    const khelArr = [];
    const categories = Object.getOwnPropertyNames(data);
    categories.map(category => {

      let khelRandom;
      khelArr.push(
        `<h3>${category}</h3>`
      )
      for(i=0;i<2;i++) {
        khelRandom = Math.floor(Math.random() * Math.floor(khelLength));
        khelArr.push(
          '<div class="khel">' +
            data[category].khel[khelRandom].name +
          '</div>'
        )
      }
    })
    element.innerHTML = khelArr.join(' ');
  })
}

function filterKhel(data) {

}

function displayKhel(data, action = 'all') {
  const element = document.getElementById('khelList');
  const categories = Object.getOwnPropertyNames(data);
  const khelArr = [];

  categories.map(category => {
    let khelLength = data[category].khel.length;``
    khelArr.push(`<h3>${category}</h3>`);
    for(i=0;i<khelLength;i++) {
      khelArr.push(
        '<div class="khel">' +
          data[category].khel[i].name +
        '</div>'
      )
    }
  })
  element.innerHTML = khelArr.join(' ');
}

function buildKhelArray(type) {

}
document.getElementById("genrateRandom").addEventListener('click', function() {
  getRandom();
})
