const width = 4
const height = 4

const gameBoard = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

const addNumber = gameBoard => {
  const emptySpots = []
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (gameBoard[i][j] === 0) emptySpots.push({x: i, y: j})
    }
  }
  const randomSpot = emptySpots[Math.floor(Math.random() * emptySpots.length)]
  const {x, y} = randomSpot
  gameBoard[x][y] = 2
}

addNumber(gameBoard)

console.log(gameBoard)


