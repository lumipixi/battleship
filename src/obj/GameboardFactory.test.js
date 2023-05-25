import ShipFactory from "./ShipFactory";
import GameboardFactory from "./GameboardFactory";

it("places ships on a given coordinate", () => {
  const ship = ShipFactory(5);
  const gameboard = GameboardFactory();

  gameboard.placeShip(ship, 2, 0);
  expect(gameboard.board[2]).toEqual([
    ship,
    ship,
    ship,
    ship,
    ship,
    0,
    0,
    0,
    0,
    0,
  ]);
});

it("successfully damages ships when attacked", () => {
  const ship = ShipFactory(1);
  const gameboard = GameboardFactory();

  gameboard.placeShip(ship, 2, 0);

  gameboard.receiveAttack(2, 0);
  expect(gameboard.board[2][0]).toEqual("H");
  expect(ship.isSunk()).toEqual(true);
});

it("successfully records missed attacks", () => {
  const gameboard = GameboardFactory();

  gameboard.receiveAttack(0, 0);
  expect(gameboard.board[0][0]).toEqual("X");
});

it("successfully rejects missed attacks", () => {
  const gameboard = GameboardFactory();

  gameboard.receiveAttack(0, 0);
  expect(gameboard.board[0][0]).toEqual("X");

  const repeatedAttackOutcome = gameboard.receiveAttack(0, 0);
  expect(repeatedAttackOutcome).toEqual("Repeated");
});
