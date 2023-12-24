const sumAll = function(num1, num2) {
    if (typeof num1 != "number"||typeof num2 != "number") {
        return("ERROR")
      }
    else{
        let sum = 0;
        let start = Math.min(num1, num2);
        let end = Math.max(num1,num2);
        for (let index = start; index < end+1; index++) {
        sum+=index
        }
        if(sum>0){
            return(sum);
        }
        else{
            return("ERROR")
        };
    };
};

// Do not edit below this line
module.exports = sumAll;
