const width = 4
const height = 4

const gameBoard = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

const generateRandomIndecies = () => {
  const x = Math.floor(Math.random() * width)
  const y = Math.floor(Math.random() * height)
  return [x, y]
}

const [x, y] = generateRandomIndecies()
gameBoard[x][y] = 2

console.log(gameBoard)


