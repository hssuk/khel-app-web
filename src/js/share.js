/*
  Set and populate sharing
*/

function setShareList(data, arr) {
  arr.push(data.name);
  return arr;
}

function getShareList(shareArr) {
  const elWhatsapp = document.querySelector("#whatsapp");
  shareArr = shareArr.join('%0A');
  elWhatsapp.href = `whatsapp://send?text=*Khel%20List*%0A${shareArr}`;
}

module.exports = {
  setShareList,
  getShareList
}
