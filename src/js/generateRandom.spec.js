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
