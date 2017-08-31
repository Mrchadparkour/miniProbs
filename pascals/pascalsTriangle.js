const exports = module.exports = {};

exports.Triangle = (n) => {
  let result = [[1], [1,1]];
  for (let row = 2; row < n; row++) {
    result[row] = [1];
    for (let col = 1; col <= row -1; col++) {
      result[row][col] = result[row-1][col] + result[row-1][col-1];
      result[row].push(1);
    }
  }
  console.log(result);
  return result;
}
