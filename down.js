const {sumDownAndRight} = require('./sum')
const {transpose} = require('./transpose')


const down = (gameBoard) => {
  const transposed = transpose(gameBoard)
  return transpose(transposed.map(sumDownAndRight))
}

const boardBefore = [
  [0, 0, 0, 4],
  [0, 0, 0, 2],
  [0, 8, 4, 2],
  [2, 16, 8, 2],
]

console.log(down(boardBefore))

const boardAfter = [
  [0, 0, 0, 0],
  [0, 0, 0, 4],
  [0, 8, 4, 2],
  [2, 16, 8, 4],
]

// expect(down(board).toBeEqual(boardAfter))