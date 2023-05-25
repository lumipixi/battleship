const GameboardFactory = () => {
  const board = [];
  for (let i = 0; i < 10; i++) {
    board.push(new Array(10).fill(0));
  }

  return {
    board,
    placeShip(ship, x, y) {
      board[x].fill(ship, y, y + ship.length);
    },

    receiveAttack(x, y) {
      if (board[x][y] === "X" || board[x][y] === "H") return "Repeated";

      if (board[x][y] === 0) {
        board[x][y] = "X";
      } else {
        board[x][y].hit();
        board[x][y] = "H";
      }
    },
  };
};

export default GameboardFactory;
