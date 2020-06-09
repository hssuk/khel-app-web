/*
  Function to generate a random item list
  Returned list will be a unique set (no duplicate items)
  @param n is the number of unique items to return
*/

function generateRandom(arr, n) {
  let result = new Array(n);
  let len = arr.length;
  let taken = new Array(len);

  while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }

  return result;
}

module.exports = generateRandom;
