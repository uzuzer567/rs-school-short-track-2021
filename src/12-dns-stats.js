/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const object = {};
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.').reverse();
    for (let j = 0; j < domain.length; j++) {
      let objectProperty = '';
      for (let k = 0; k <= j; k++) {
        objectProperty += `.${domain[k]}`;
      }
      if (!Number(object[objectProperty])) {
        object[objectProperty] = 1;
      } else {
        object[objectProperty] += 1;
      }
    }
  }
  return object;
}

module.exports = getDNSStats;
