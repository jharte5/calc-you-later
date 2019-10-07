const calculate = require('./calculate')


    let userInput1Num = process.argv[2];
    let userInputSign = process.argv[3];
    let userInput2Num = process.argv[4];
    


    const result = (calculate('userInput1Num', 'userInputSign', 'userInput2Num'));
    console.log(result;)