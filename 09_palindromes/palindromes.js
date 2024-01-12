const palindromes = function (phrase) {
    phrase = phrase.split(" ").join("").toLowerCase().replace(/[^a-z0-9]/g,"");
    let esarhp = phrase.split("").reverse().join("");
    console.log(esarhp);
    console.log(phrase);
    return phrase == esarhp;
  };
// Do not edit below this line
module.exports = palindromes;
