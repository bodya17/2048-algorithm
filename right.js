const {sumDownAndRight} = require('./sum')

const right = (gameBoard) => {
  return gameBoard.map(sumDownAndRight)
}

const boardBefore = [
  [4, 0, 0, 0],
  [2, 0, 2, 0],
  [4, 4, 4, 2],
  [8, 32, 16, 8],
]

console.log(right(boardBefore))

const boardAfter = [
  [0, 0, 0, 4],
  [0, 0, 0, 4],
  [0, 4, 8, 2],
  [8, 32, 16, 8],
]

// expect(right(board).toBeEqual(boardAfter))