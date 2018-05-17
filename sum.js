
const sumUpAndLeft = (arr) => {
  const len = arr.length  
  arr = arr.filter(n => n !== 0)
  const result = []
  for (var i = 0; i < arr.length;) {
    if (arr[i] === arr[i+1]) {
      result.push(2 * arr[i])
      i+=2
    } else {
      result.push(arr[i])
      i++
    }

  }
  return [...result, ...new Array(len - result.length).fill(0)]
}

const sumDownAndRight = (arr) => {
  const len = arr.length
  const result = []
  arr = arr.filter(n => n !== 0)  
  for (var i = arr.length - 1; i >= 0;) {
    if (arr[i] === arr[i-1]) {
      result.unshift(2 * arr[i])
      i-=2
    } else {
      result.unshift(arr[i])
      i--
    }
  }
  return [...new Array(len - result.length).fill(0), ...result]
}

module.exports = {
  sumUpAndLeft,
  sumDownAndRight
}