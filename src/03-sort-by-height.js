/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrNumbers = [];
  const answerArr = arr;
  for (let i = 0; i < answerArr.length; i++) {
    if (arr[i] !== -1) {
      arrNumbers.push(arr[i]);
    }
  }
  arrNumbers = arrNumbers.sort((a, b) => a - b);

  let elementLocation = 0;

  for (let i = 0; i < answerArr.length; i++) {
    if (answerArr[i] !== -1) {
      answerArr[i] = arrNumbers[elementLocation];
      elementLocation++;
    }
  }
  return answerArr;
}

module.exports = sortByHeight;
