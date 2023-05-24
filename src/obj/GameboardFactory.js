const GameboardFactory = () => {

  const board = [];
  for (let i = 0; i < 10; i++) {
    board.push(new Array(10).fill(0));
  }

  return {
    board,
    placeShip(ship, x, y) {
      board[x].fill(ship, y, y + ship.length)
    },
  };
};

export default GameboardFactory;
