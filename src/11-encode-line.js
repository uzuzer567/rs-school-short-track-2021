/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArray = str.split('');
  let counter = 1;
  let answer = '';
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i + 1]) {
      counter++;
    }
    if (strArray[i] !== strArray[i + 1]) {
      if (counter !== 1) {
        answer += counter;
        answer += strArray[i];
        counter = 1;
      } else {
        answer += strArray[i];
        counter = 1;
      }
    }
  }
  return answer;
}

module.exports = encodeLine;
