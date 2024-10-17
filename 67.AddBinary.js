var addBinary = function(a, b) {
  a = a.split('').reverse()
  b = b.split('').reverse()
  let maxLen = Math.max(a.length, b.length);
  let c = []
  let curr;

  for(let i; i < maxLen; i++) {
      curr = a[i] + b[i]
      console.log(curr)
  }

};

addBinary('11', '1') // 100