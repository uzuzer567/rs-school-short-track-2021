/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const nArray = n.split('');
  const answerArray = [];
  for (let i = 0; i < nArray.length; i++) {
    if (nArray[i] === '-' || (Number(nArray[i]) > -1 && Number(nArray[i] < 10)) || (nArray[i] >= 'A' && nArray[i] <= 'F')) {
      answerArray.push(true);
    } else {
      answerArray.push(false);
    }
  }
  const answerSet = new Set(answerArray);
  let answer = false;
  if (answerSet.size === 1) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

module.exports = isMAC48Address;
