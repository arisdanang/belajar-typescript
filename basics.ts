function add(num1: number, num2:number, showResult: boolean, phrase: string) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('incorrect input!');
  }

  const result = num1 + num2;
  if(showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;

const number2 = 2.4;
const printResult = false;
let resultPhrase = 'Result is :';


console.log(add(number1,number2,printResult,resultPhrase))
