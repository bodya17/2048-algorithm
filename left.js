const {sumUpAndLeft} = require('./sum')

const left = (gameBoard) => {
  return gameBoard.map(sumUpAndLeft)
}

const boardBefore = [
  [0, 2, 0, 0],
  [0, 8, 0, 4],
  [2, 4, 8, 8],
  [4, 2, 2, 2],
]

console.log(left(boardBefore))

const boardAfter = [
  [2, 0, 0, 0],
  [8, 4, 0, 0],
  [2, 4, 16, 0],
  [4, 4, 2, 0],
]

// expect(left(board).toBeEqual(boardAfter))