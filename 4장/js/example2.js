let num1 = prompt("첫 번재 정수 입력");
let num2 = prompt("두 번재 정수 입력");

let mul = (a, b) => {
    let result = a * b;
    return result;
}

document.write(`<h2>${num1} * ${num2} =  ${mul(num1, num2)}</h2>`);