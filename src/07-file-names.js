/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesArray = names;
  for (let i = 0; i < namesArray.length; i++) {
    let counter = 0;
    for (let j = 0; j < namesArray.length; j++) {
      if (namesArray[i] === namesArray[j]) {
        if (counter === 0) {
          counter++;
        } else {
          namesArray[j] = `${namesArray[j]}(${counter})`;
          counter++;
        }
      }
    }
  }
  return namesArray;
}

module.exports = renameFiles;
