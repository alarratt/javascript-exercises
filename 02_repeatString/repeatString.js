const repeatString = function(string, repeat) {
    if (repeat<0){
        return('ERROR');
    }
    else{
    let word="";
    for (let index = 0; index < repeat; index++) {
      word+=string;
    }
    return(word)
}
};

// Do not edit below this line
module.exports = repeatString;
