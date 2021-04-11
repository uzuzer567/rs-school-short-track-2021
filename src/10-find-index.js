/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let answer;
  let begin = 0;
  let end = array.length - 1;
  while (begin <= end) {
    if (array[begin] === value) {
      answer = begin;
      break;
    } else if (array[end] === value) {
      answer = end;
      break;
    } else {
      begin++;
      end--;
    }
  }
  return answer;
}

module.exports = findIndex;
