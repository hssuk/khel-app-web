const generateRandom = require('./generateRandom.js');

// Generate random items from an array with given number of items
describe('Return array length', () => {
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  it('should genarte unique random items from an array', () => {
    expect(generateRandom( arr, 2 ).length).toBe(2);
  });

  it('should genarte unique random items from an array', () => {
    expect(generateRandom( arr, 4 ).length).toBe(4);
  });
});


// Generate disticnt random items from an array with given number of items
describe('Return distinct array', () => {
  expect.extend({
    toBeDistinct(received) {
      const pass = Array.isArray(received) && new Set(received).size === received.length;
      if (pass) {
        return {
          message: () => `expected [${received}] array is unique`,
          pass: true,
        };
      } else {
        return {
          message: () => `expected [${received}] array is not to unique`,
          pass: false,
        };
      }
    }
  });

  const items = [ 'item1' ,'item2' , 'item3'];

  expect(items).toBeDistinct();

});
