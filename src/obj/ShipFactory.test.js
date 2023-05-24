import ShipFactory from "./ShipFactory";

it("returns that the ship is sunk", () => {
  const ship = ShipFactory(1);
  ship.hit();
  const isSunk = ship.isSunk();
  expect(isSunk).toEqual(true);
});

it("returns that the ship is NOT sunk", () => {
  const ship = ShipFactory(2);
  const isSunk = ship.isSunk();
  expect(isSunk).toEqual(false);
});
