const {getSummer} = require('./sum')

const sum = getSummer({inverse: true})

const right = gameBoard => gameBoard.map(sum)

const boardBefore = [
  [4, 2, 0, 4],
  [2, 0, 2, 0],
  [4, 4, 4, 2],
  [8, 32, 16, 8],
]

console.log(right(boardBefore))

const boardAfter = [
  [0, 4, 2, 4],
  [0, 0, 0, 4],
  [0, 4, 8, 2],
  [8, 32, 16, 8],
]

// expect(right(board).toBeEqual(boardAfter))