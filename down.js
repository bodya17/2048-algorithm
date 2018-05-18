const assert = require('assert');

const {getSummer} = require('./sum')

const sum = getSummer({inverse: true})
const {transpose} = require('./transpose')


const down = (gameBoard) => {
  const transposed = transpose(gameBoard)
  return transpose(transposed.map(sum))
}

const boardBefore = [
  [8, 2, 0, 4],
  [0, 0, 0, 2],
  [0, 8, 4, 2],
  [8, 16, 8, 2],
]

console.log(down(boardBefore))


const boardAfter = [
  [0, 0, 0, 0],
  [0, 2, 0, 4],
  [0, 8, 4, 2],
  [16, 16, 8, 4],
]

assert.deepEqual(down(boardBefore), boardAfter)

// expect(down(board).toBeEqual(boardAfter))