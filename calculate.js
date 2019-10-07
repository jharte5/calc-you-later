function calculate(num,num1,sign) {
    const realNum = Number(num);
    const realNum1 = Number(num1);
    if(sign === "+") {
        return realNum + realNum1
    } else if(sign === "-") {
        return realNum - realNum1
    } else if(sign === "x") {
        return realNum * realNum1
    } else if (sign === "/") {
        return realNum / realNum1 
    } else if(sign === "%") {
        return realNum % realNum1
    }else if(sign === "plus") {
        return realNum + realNum1
    } else if(sign === "minus") {
        return realNum - realNum1
    } else if( sign === "times") {
        return realNum * realNum1
    } else if(sign === "X") {
        return realNum * realNum1
    } else if(sign === "modulus") {
        return realNum % realNum1
    } else if(sign === "mod") {
        return realNum % realNum1
    } else {
        return 'Sorry, that\'s not a mathematical operation!'
    }
    
    
}
// console.log(calculate("num", "num", "*")) 

module.exports = calculate;