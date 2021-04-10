/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayN = n.toString().split('');
  const numbers = [];
  for (let i = 0; i < arrayN.length; i++) {
    const elem = arrayN[i];
    arrayN.splice(i, 1);
    numbers.push(arrayN.join(''));
    arrayN.splice(i, 0, elem);
  }
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return Number(max);
}

module.exports = deleteDigit;
