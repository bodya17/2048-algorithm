const getSummer = ({inverse} = {}) => arr => {
  const len = arr.length  
  arr = arr.filter(n => n !== 0)
  const result = []
  if (inverse)
    arr.reverse()
  for (var i = 0; i < arr.length;) {
    if (arr[i] === arr[i+1]) {
      result.push(2 * arr[i])
      i += 2
    } else {
      result.push(arr[i])
      i++
    }
  }
  const zeros = new Array(len - result.length).fill(0)

  return inverse ? [...result, ...zeros].reverse() : [...result, ...zeros]
}


module.exports = {
  getSummer
}