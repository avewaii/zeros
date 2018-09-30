module.exports = function getZerosCount(number) {
 let result = 0;
  let i = 1;
  while (Math.round(number / Math.pow(5, i))) {
    result += Math.floor(number / Math.pow(5, i));
    ++i;
  }
  return result;
}
