const fibonacci = function(n) {
    let nMinus2 = 0;
    let nMinus1 = 1;
    let number = 0;
    if (n < 0) return ("OOPS")
    if (n == 1) number = 1;
    for (let i = 2; i <= n;i++){
      number = nMinus1 + nMinus2;
      nMinus2 = nMinus1;
      nMinus1 = number;
    };
    return number;
  };

// Do not edit below this line

module.exports = fibonacci;
