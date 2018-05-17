exports.transpose = arr => {
  const transposed = [[], [], [], []]
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      transposed[j][i] = arr[i][j]
    }
  }
  return transposed
}
