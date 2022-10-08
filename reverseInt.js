/**
 * @param {number} x
 * @return {number}
 */
//[-2^31, 2^31 - 1], then return 0
function reverse(x) {
  let output = "";
  let strx = parseInt(x).toString();

  for (i = strx.length - 1; i >= 0; i--) {
    if (i == 0) {
      if (isNaN(strx[i])) {
        output = strx[i] + output;
      } else {
        output += strx[i];
      }
    } else {
      output += strx[i];
    }
  }
  if (
    parseInt(output) < -Math.pow(2, 31) ||
    parseInt(output) > Math.pow(2, 31) - 1
  ) {
    return 0;
  }
  return parseInt(output);
}

x = 1563847412;
console.log(reverse(x));
