const ShipFactory = (length) => {
  let numberOfHits = 0;

  return {
    length,
    //* ES6 Object Shorthand
    hit() {numberOfHits += 1},
    isSunk: () => numberOfHits >= length
  };
};

export default ShipFactory;
