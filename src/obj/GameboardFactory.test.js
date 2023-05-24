import ShipFactory from "./ShipFactory";
import GameboardFactory from "./GameboardFactory"

it("places ships on a given coordinate", () => {
  const ship = ShipFactory(5);
  const gameboard = GameboardFactory();

  gameboard.placeShip(ship, 2, 0);
  expect(gameboard.board[2]).toEqual([ship, ship, ship, ship, ship, 0, 0, 0, 0, 0])

})