const reverseString = function(input) {
    let gnirts="";
    for (let index = input.length; index >0; index--) {
      gnirts+=input[index-1]
      console.log(gnirts);  
    }
  return(gnirts)
};
// Do not edit below this line
module.exports = reverseString;
