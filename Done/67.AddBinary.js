var addBinary = function(a, b) {
  a = a.split('').reverse()
  b = b.split('').reverse()
  let maxLen = Math.max(a.length, b.length);
  let c = []
  let curr;
  let remainder = 0;


  for(let i = 0; i < maxLen; i++) {
    curr = remainder;
    if (remainder != 0) {
      remainder = 0;
    }

    if (!isNaN(a[i])) {
      curr += +a[i]
    }
    if (!isNaN(b[i])) {
      curr += +b[i]
    }

    c.push(curr % 2)

    if (curr >= 2) {
      remainder = Math.floor(curr/2);
      if (i === maxLen - 1) {
        maxLen++;
      }
    }
  }
  
  return c.reverse().join('');
};


addBinary('11', '1') // 100

0