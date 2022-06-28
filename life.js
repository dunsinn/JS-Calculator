const operator = prompt("Enter operator either +, -, * or /");

const FirstNo = parseFloat(prompt("Enter first number:"));
const SecondNo = parseFloat(prompt("Enter second number:"));

let answer;


if (operator == "+"){
    answer = FirstNo + SecondNo;
}
else if (operator == "-"){
    answer = FirstNo - SecondNo;
}
else if (operator == "*"){
    answer = FirstNo * SecondNo;
}
else {
    answer = FirstNo / SecondNo;
}

console.log(`${FirstNo} ${operator} ${SecondNo} = ${answer}`);