const {sumUpAndLeft} = require('./sum')
const {transpose} = require('./transpose')

const up = (gameBoard) => {
  const transposed = transpose(gameBoard)
  return transpose(transposed.map(sumUpAndLeft))
}

  
const boardBefore = [
  [0, 0, 0, 0],
  [0, 0, 0, 2],
  [2, 0, 0, 4],
  [2, 32, 16, 4],
]

console.log(up(boardBefore))

const boardAfter = [
  [4, 32, 16, 2],
  [0, 0, 0, 8],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]

// expect(up(board).toBeEqual(boardAfter))