// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
// function convertToString(n) {
//   return String(n);
// }

// - Write a Function Expression
// let convertToString = function (n) {
//   return String(n);
// };

// - Write an Arrow Function without curly brackets (if possible)
// let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
// let convertToString = (n) => {
//   return String(n);
// };

// - Execute the function
// convertToString(21);

// - Execute the function and store the return value in a variable.
// let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
// function addOne(number){
//   return number+1;
// }
// - Write a Function Expression
// const addOne=function (number){
//   return number+1;
// }
// - Write an Arrow Function without curly brackets(if possible)
// const addOne=(number)=>number+1;


// - Write an Arrow Function with curly brackets
// const addOne=(number)=>{
//   return number+1;
// }
// - Execute the function
// addOne(12);
// - Execute the function and store the return value in a variable.
// let returnValue= addOne(12);
// - What is the typeof returnValue
//typeof returnValue==>'number';
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
// function substractOne(number){
//   return number-1;
// }
// - Write a Function Expression
// const substractOne=function (number){
//   return number-1;
// }
// - Write an Arrow Function without curly brackets(if possible)
// const substractOne=(number)=>number-1;
// - Write an Arrow Function with curly brackets
// const substractOne=(number)=>{
//   return number-1;
// }
// - Execute the function
// substractOne();
// - Execute the function and store the return value in a variable.
// let ans=substractOne();
// - What is the typeof returnValue
//'number'
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
// function addTwoNumbers(numA,numB){
//   return numA+numB;
// }
// - Write a Function Expression
// const addition=function addTwoNumbers(numA,numB){
//   return numA+numB;
// }
// - Write an Arrow Function without curly brackets(if possible)
// const addition=(numA,numB)=>numA+numB;
// - Write an Arrow Function with curly brackets
// const addition=(numA,numB)=>{
//   return numA+numB;
// }
// - Execute the function
// addTwoNumbers();
// addition();
// - Execute the function and store the return value in a variable
// let addedNumbers=addTwoNumbers();
// - What is the typeof returnValue
//'number'
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
// function square(num){
//   return num*num;
// }
// - Write a Function Expression
// const square=function square(num){
//   return num*num;
// }
// - Write an Arrow Function without curly brackets(if possible)
// const square=(num)=>num*num;
// - Write an Arrow Function with curly brackets
// const square=(num)=>{
//   return num*num;
// }
// - Execute the function
// square();
// - Execute the function and store the return value in a variable
// let squaredValue=square();
// - What is the typeof returnValue
//'number'
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
// function isGreater(num1,num2){
// prompt("enter num1");
// prompt("enter num2");
// if(num1>num2){
//  return `true`;
// }else{
//   return `false`;
// }
// }
// - Write a Function Expression
// const maxvalue=isGreater();
// - Write an Arrow Function without curly brackets(if possible)
// const maxvalue=(num1,num2)=>num1>num2;
// - Write an Arrow Function with curly brackets
// const maxvalue=(num1,num2)=>{
//   prompt("enter num1");
//   prompt("enter num2");
//   if(num1>num2){
//    return `true`;
//   }else{
//     return `false`;
//   }
//   }
// - Execute the function
// isGreater();
// - Execute the function and store the return value in a variable
// let maxVariable=isGreater();
// - What is the typeof returnValue
//'string'
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(numb1){
  // numb1=+prompt("enter numb1");
  if(numb1%2==0){
    return `even`;
  }else{
    return `odd`;
  }
}
// - Write an anonymous Function Expression
const evenOrOdd =function (numb1){
  if(numb1%2==0){
    return `even`;
  }else{
    return `odd`;
  }
}
// - Write an named Function Expression
const evenOrOdd =function oddOrEven(numb1){
  if(numb1%2==0){
    return `even`;
  }else{
    return `odd`;
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
const evenOrOdd =(numb1)=>(numb1%2==0)? return `even`: return `odd`;
 
// - Write an Arrow Function with curly brackets
const evenOrOdd =(numb1)=>{
  if(numb1%2==0){
    return `even`;
  }else{
    return `odd`;
  }
}
// - Execute the function
oddOrEven(numb1);
// - Execute the function and store the return value in a variable
let outputValue=oddOrEven(numb1);
// - What is the typeof returnValue
//string
