/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let trueCounter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] !== false) {
        trueCounter++;
      }
    }
  }

  const answerMatrix = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    answerMatrix[i] = new Array(matrix[0].length);
  }

  if (trueCounter === 0) {
    for (let i = 0; i < answerMatrix.length; i++) {
      for (let j = 0; j < answerMatrix[0].length; j++) {
        answerMatrix[i][j] = 0;
      }
    }
  } else {
    for (let i = 0; i < answerMatrix.length; i++) {
      for (let j = 0; j < answerMatrix[0].length; j++) {
        answerMatrix[i][j] = 0;
      }
    }
    for (let i = 0; i < answerMatrix.length; i++) {
      for (let j = 0; j < answerMatrix[0].length; j++) {
        if (i !== matrix.length - 1 && matrix[i + 1][j] === true) {
          answerMatrix[i][j] += 1;
        }
        if (j !== matrix[0].length - 1 && matrix[i][j + 1] === true) {
          answerMatrix[i][j] += 1;
        }
        if (i !== 0 && matrix[i - 1][j] === true) {
          answerMatrix[i][j] += 1;
        }
        if (j !== 0 && matrix[i][j - 1] === true) {
          answerMatrix[i][j] += 1;
        }
        if (i !== 0 && j !== matrix[0].length - 1 && matrix[i - 1][j + 1] === true) {
          answerMatrix[i][j] += 1;
        }
        if (j !== 0 && i !== matrix.length - 1 && matrix[i + 1][j - 1] === true) {
          answerMatrix[i][j] += 1;
        }
        if (i !== 0 && j !== 0 && matrix[i - 1][j - 1] === true) {
          answerMatrix[i][j] += 1;
        }
      }
    }
    for (let i = answerMatrix.length - 1; i > 0; i--) {
      for (let j = answerMatrix[0].length - 1; j > 0; j--) {
        if (i !== 0 && j !== 0 && matrix[i][j] === true) {
          answerMatrix[i - 1][j - 1] += 1;
        }
      }
    }
  }

  return answerMatrix;
}

module.exports = minesweeper;
